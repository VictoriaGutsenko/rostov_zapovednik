import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Gallery.module.css';

import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import closeIcon from '../../assets/images/close.svg';

const importedImages = import.meta.glob('../../assets/images/gallery/*.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const photos = Object.values(importedImages).reverse();

const Gallery = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(null);


  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex]);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('photos.gallery.title')}</h2>

        <div className={styles.grid}>
          {photos.map((src, index) => (
            <div 
              key={index} 
              className={styles.imageWrapper} 
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(index);
                }
              }}
            >
              <img
                src={src}
                alt={t('photos.gallery.photoAlt', { index: index + 1 })}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div className={styles.overlay} onClick={closeModal}>
          <button className={styles.closeBtn} onClick={closeModal} aria-label="Close">
            <img
              src={closeIcon}
              alt={t('photos.gallery.closeAlt')}
              className={styles.closeIconImg}
            />
          </button>

          <button 
            className={`${styles.arrowBtn} ${styles.leftArrow}`} 
            onClick={prevPhoto}
            aria-label="Previous"
          >
            <img
              src={arrowLeft}
              alt={t('photos.gallery.prevAlt')}
              className={styles.arrowIconImg}
            />
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[currentIndex]}
              alt={t('photos.gallery.fullSizeAlt')}
              className={styles.modalImage}
            />
          </div>

          <button 
            className={`${styles.arrowBtn} ${styles.rightArrow}`} 
            onClick={nextPhoto}
            aria-label="Next"
          >
            <img
              src={arrowRight}
              alt={t('photos.gallery.nextAlt')}
              className={styles.arrowIconImg}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
