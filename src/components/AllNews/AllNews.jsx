import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsData } from '../../data/newData';
import styles from './AllNews.module.css';
import NewsCard from '../NewsCard/NewsCard';

const AllNews = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.newsPageSection}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{t('news.title')}</h1>

        <div className={styles.grid}>
          {newsData.map((item) => (
            <NewsCard key={item.id} item={item} detailPath="/news" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllNews;
