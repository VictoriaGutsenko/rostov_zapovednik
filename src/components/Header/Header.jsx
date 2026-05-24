import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';


import logo from '../../assets/images/logo.svg';
import burger from '../../assets/images/burger.svg';
import close from '../../assets/images/close.svg';
import arrowDown from '../../assets/images/arrow-down.png';
import okIcon from '../../assets/images/OK.svg';
import vkIcon from '../../assets/images/vk.svg';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const navLinks = [
    { text: t('common.header.about'), path: '/about' },
    { text: t('common.header.photos'), path: '/photos' },
    { text: t('common.header.news'), path: '/news' },
    { text: t('common.header.events'), path: '/events' },
    { text: t('common.header.contacts'), path: '/contacts' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo_wrap}>
          <img src={logo} alt="Ростовский Заповедник" className={styles.logo_img} />
        </Link>

        <button className={styles.burger_btn} onClick={toggleMenu}>
          <img src={burger} alt="Меню" className={styles.burger_img} />
        </button>

        <div className={`${styles.menu_container} ${isMenuOpen ? styles.menu_open : ''}`}>
          <button className={styles.close_btn} onClick={toggleMenu}>
            <img src={close} alt="Закрыть" className={styles.close_img} />
          </button>

          <nav className={styles.nav_wrap}>
            <ul className={styles.nav_list}>
              {navLinks.map((link, index) => (
                <li key={index} className={styles.nav_item}>
                  <Link 
                    to={link.path} 
                    className={styles.nav_link} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.action_wrap}>
            <div className={styles.lang_wrap}>
              <button className={styles.lang_btn} onClick={toggleLangMenu}>
                {i18n.language === 'ru' ? 'RU' : 'EN'}
                <img 
                  src={arrowDown}
                  alt="Выбор языка" 
                  className={`${styles.lang_arrow} ${isLangMenuOpen ? styles.arrow_up : ''}`} 
                />
              </button>

              {isLangMenuOpen && (
                <div className={styles.lang_dropdown}>
                  <button 
                    className={styles.lang_option} 
                    onClick={() => changeLanguage('ru')}
                  >
                    RU
                  </button>
                  <button 
                    className={styles.lang_option} 
                    onClick={() => changeLanguage('en')}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            
            <div className={styles.soc_icons}>
              <a href="https://ok.ru/group/57342091853990" target="_blank" rel="noreferrer" className={styles.soc_link_ok}>
                <img src={okIcon} alt="OK" className={styles.soc_img} />
              </a>
              <a href="https://vk.ru/club59410135" target="_blank" rel="noreferrer" className={styles.soc_link_vk}>
                <img src={vkIcon} alt="VK" className={styles.soc_img} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
