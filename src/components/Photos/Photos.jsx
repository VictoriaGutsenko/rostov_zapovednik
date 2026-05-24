import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Photos.module.css';

import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import photo4 from '../../assets/images/photo4.jpg';
import photo5 from '../../assets/images/photo5.jpg';

import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

const galleryImages = [photo1, photo2, photo3, photo4, photo5];

const Photos = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const sideIndices = [
    (currentIndex + 1) % galleryImages.length,
    (currentIndex + 2) % galleryImages.length,
    (currentIndex + 3) % galleryImages.length,
  ];

  return (
    <section className={styles.photosSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{t('home.photos.sectionTitle')}</h2>
          <Link to="/photos" className={`${styles.moreButton} ${styles.desktopButton}`}>
            {t('home.photos.moreButton')}
          </Link>
        </div>

        <div className={styles.content}>
          <div className={styles.mainPhotoWrapper}>
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={t('home.photos.galleryAlt', { index: index + 1 })}
                className={`${styles.mainImage} ${index === currentIndex ? styles.active : ''}`}
              />
            ))}

            <button className={`${styles.arrowBtn} ${styles.leftBtn}`} onClick={prevPhoto}>
              <img src={arrowLeft} alt={t('home.photos.prevAlt')} />
            </button>
            <button className={`${styles.arrowBtn} ${styles.rightBtn}`} onClick={nextPhoto}>
              <img src={arrowRight} alt={t('home.photos.nextAlt')} />
            </button>
          </div>

          <div className={styles.sideGallery}>
            {sideIndices.map((index, i) => (
              <div key={i} className={styles.sidePhotoWrapper}>
                <img
                  src={galleryImages[index]}
                  alt={t('home.photos.thumbnailAlt', { index: index + 1 })}
                  className={styles.sideImage}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mobileButtonWrapper}>
          <Link to="/photos" className={`${styles.moreButton} ${styles.mobileButton}`}>
            {t('home.photos.moreButton')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Photos;
