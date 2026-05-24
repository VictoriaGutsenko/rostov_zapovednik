import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

import bgImageDesktop from '../../assets/images/hero-bg.png';
import bgImageMobile from '../../assets/images/hero-bg-mobile.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.hero}
      style={{
        '--bg-desktop': `url(${bgImageDesktop})`,
        '--bg-mobile': `url(${bgImageMobile})`,
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t('home.hero.titleLine1')}
            <br />
            {t('home.hero.titleLine2')}
            <br />
            {t('home.hero.titleLine3')}
          </h1>

          <p className={styles.subtitle}>
            {t('home.hero.subtitleLine1')}
            <br />
            {t('home.hero.subtitleLine2')}
            <br />
            {t('home.hero.subtitleLine3')}
          </p>

          <Link to="/about" className={styles.button}>{t('home.hero.button')}</Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
