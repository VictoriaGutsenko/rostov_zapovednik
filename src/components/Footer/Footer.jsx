import React from 'react';
import { useTranslation } from 'react-i18next';
// 1. ИМПОРТИРУЕМ КОМПОНЕНТ LINK ИЗ REACT ROUTER
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import logo from '../../assets/images/logo-footer.svg'; 
import iconVk from '../../assets/images/vk-footer.svg';
import iconOk from '../../assets/images/ok-footer.svg';


const CONTACTS = {
  phones: ['+7 (391) 123-45-67', '+7 (391) 123-45-68'],
  email: 'info@zapoedr.ru'
};

const Footer = () => {
  const { t } = useTranslation();

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          
          
          <div onClick={scrollToTop} className={styles.logoLink}>
            <img src={logo} alt="Ростовский заповедник" className={styles.logo} />
          </div>

          <div className={styles.navColumns}>
            
            
            <div className={styles.column}>
              <Link to="/about">{t('common.footer.aboutReserve')}</Link>
              <Link to="/news">{t('common.footer.news')}</Link>
              <Link to="/events">{t('common.footer.activities')}</Link>
              <Link to="/photos">{t('common.footer.tourism')}</Link>
            </div>

            
            <div className={styles.column}>
              <Link to="/">{t('common.footer.partners')}</Link>
              <Link to="/contacts">{t('common.footer.contacts')}</Link>
              <Link to="/">{t('common.footer.tsimlyansky')}</Link>
              <Link to="/photos">{t('common.footer.multimedia')}</Link>
            </div>

            
            <div className={styles.column}>
              <span className={styles.columnTitle}>{t('common.footer.contacts')}</span>
              
              
              {CONTACTS.phones.map((phone, index) => {
                
                const cleanPhone = phone.replace(/[\s()-]/g, '');
                return (
                  <a key={index} href={`tel:${cleanPhone}`}>{phone}</a>
                );
              })}
              <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
            </div>

          </div>

          <div className={styles.socials}>
            <a href="https://ok.ru/group/57342091853990" target="_blank" rel="noreferrer">
              <img src={iconOk} alt="Одноклассники" />
            </a>
            <a href="https://vk.com/club59410135" target="_blank" rel="noreferrer">
              <img src={iconVk} alt="ВКонтакте" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
