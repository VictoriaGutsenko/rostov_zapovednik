import { getImageUrl } from '../../data/newData';
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsData } from '../../data/newData';
import styles from './NewsDetail.module.css';


const NewsDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const article = newsData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h2>{t('news.notFound')}</h2>
        <Link to="/news">{t('news.notFoundLink')}</Link>
      </div>
    );
  }

  const paragraphs = t(`news.${article.id}.paragraphs`, {
    returnObjects: true,
    defaultValue: [],
  });
  const paragraphList = Array.isArray(paragraphs) ? paragraphs : [];

  return (
    <article className={styles.articleSection}>
      <div className={styles.container}>

        <Link to="/news" className={styles.backLink}>
          {t('news.backLink')}
        </Link>

        <h1 className={styles.title}>{t(`news.${article.id}.title`)}</h1>
        <div className={styles.date}>{t(`news.${article.id}.date`)}</div>

        <div className={styles.contentWrapper}>
          {article.mainImage && (
            <img
            src={getImageUrl(article.mainImage)}
            alt={t(`news.${article.id}.title`)}
            className={styles.mainImage}
          />
          
          )}

          {paragraphList.map((paragraph, index) => (
            <p key={index} className={styles.text}>
              {paragraph}
            </p>
          ))}
        </div>

        {article.bottomGallery && article.bottomGallery.length > 0 && (
          <div className={styles.galleryGrid}>
            {article.bottomGallery.map((imgSrc, index) => {
              let wrapperClass = styles.imageWrapper;

              if (article.bottomGallery.length === 2) {
                wrapperClass = `${styles.imageWrapper} ${styles.span2}`;
              } else if (article.bottomGallery.length === 1) {
                wrapperClass = `${styles.imageWrapper} ${styles.span4}`;
              }

              return (
                <div key={index} className={wrapperClass}>
                  <img
                    src={getImageUrl(imgSrc)}
                    alt={t('news.galleryPhotoAlt', { index: index + 1 })}
                    className={styles.galleryImage}
                  />

                </div>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsDetail;
