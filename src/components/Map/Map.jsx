import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Map.module.css';

const Map = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const activateMap = () => {
    setIsActive(true);
  };

  
  const MAP_TITLE = 'Карта Ростовского заповедника';
  const YANDEX_MAP_SRC = 'https://yandex.ru/map-widget/v1/?um=constructor%3A77ecf914d3382a933832055647885220e266be88cb4a267e0377c113687242cd&amp;source=constructor';

  return (
    <section className={styles.mapSection}>
      <div
        className={`${styles.mapContainer} ${isActive ? styles.active : ''}`}
        onClick={!isActive ? activateMap : undefined}
        onKeyDown={
          !isActive
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  activateMap();
                }
              }
            : undefined
        }
        role={!isActive ? 'button' : undefined}
        tabIndex={!isActive ? 0 : undefined}
        aria-label={!isActive ? t('contacts.mapActivateHint') : undefined}
      >
        {!isActive && (
          <div className={styles.mapOverlay}>{t('contacts.mapActivateHint')}</div>
        )}
        <iframe
          src={YANDEX_MAP_SRC}
          width="1200"
          height="541"
          frameBorder="0"
          title={MAP_TITLE}
          tabIndex={isActive ? 0 : -1}
          sandbox="allow-same-origin allow-scripts allow-popups"
          loading="lazy"
          allow="geolocation"
        />
      </div>
    </section>
  );
};

export default Map;
