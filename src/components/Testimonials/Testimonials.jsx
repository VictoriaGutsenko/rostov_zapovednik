import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Testimonials.module.css';

import ava1 from '../../assets/images/ava1.png';
import ava2 from '../../assets/images/ava2.png';
import ava3 from '../../assets/images/ava3.png';
import ava4 from '../../assets/images/ava4.png';

import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

const testimonialAvatars = [ava1, ava2, ava3, ava4];
const testimonialKeys = ['item1', 'item2', 'item3', 'item4'];

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonialKeys.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + testimonialKeys.length) % testimonialKeys.length
    );
  };

  const secondCardIndex = (currentIndex + 1) % testimonialKeys.length;

  const renderCard = (index) => {
    const itemKey = testimonialKeys[index];
    return (
      <div className={styles.testimonialCard}>
        <div className={styles.leftCol}>
          <img
            src={testimonialAvatars[index]}
            alt={t(`home.testimonials.items.${itemKey}.name`)}
            className={styles.avatar}
          />
          <span className={styles.date}>
            {t(`home.testimonials.items.${itemKey}.date`)}
          </span>
        </div>
        <div className={styles.rightCol}>
          <h4 className={styles.authorName}>
            {t(`home.testimonials.items.${itemKey}.name`)}
          </h4>
          <p className={styles.testimonialText}>
            {t(`home.testimonials.items.${itemKey}.text`)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{t('home.testimonials.sectionTitle')}</h2>

          <div className={`${styles.arrowsWrapper} ${styles.mobileArrows}`}>
            <button className={styles.arrowBtn} onClick={nextTestimonials}>
              <img src={arrowRight} alt={t('home.testimonials.nextAlt')} />
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <button className={`${styles.arrowBtn} ${styles.desktopArrow}`} onClick={prevTestimonials}>
            <img src={arrowLeft} alt={t('home.testimonials.prevAlt')} />
          </button>

          <div className={styles.cardsWrapper}>
            {renderCard(currentIndex)}
            <div className={styles.divider}></div>
            {renderCard(secondCardIndex)}
          </div>

          <button className={`${styles.arrowBtn} ${styles.desktopArrow}`} onClick={nextTestimonials}>
            <img src={arrowRight} alt={t('home.testimonials.nextAlt')} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
