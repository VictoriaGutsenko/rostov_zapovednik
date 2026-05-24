import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.css';

const administrationDepts = ['reception', 'ecoEducation', 'accounting'];
const visitCenterDepts = ['security', 'science'];

const ContactItem = ({ deptKey, t }) => (
  <div className={styles.contactItem}>
    <p className={styles.dept}>{t(`contacts.departments.${deptKey}.name`)}</p>
    <p>
      {t('contacts.phoneLabel')} {t(`contacts.departments.${deptKey}.phone`)}
    </p>
    <p>
      {t('contacts.emailLabel')}{' '}
      <a href={`mailto:${t(`contacts.departments.${deptKey}.email`)}`}>
        {t(`contacts.departments.${deptKey}.email`)}
      </a>
    </p>
  </div>
);

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{t('contacts.pageTitle')}</h1>

        <div className={styles.topInfo}>
          <p>
            <strong>{t('contacts.postalAddressLabel')}</strong> {t('contacts.postalAddress')}
          </p>
          <p>
            <strong>{t('contacts.directorLabel')}</strong> {t('contacts.directorName')}
          </p>
          <p>
            <strong>{t('contacts.dutyOfficerLabel')}</strong> {t('contacts.dutyOfficerName')}
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h2 className={styles.colTitle}>{t('contacts.administrationTitle')}</h2>
            {administrationDepts.map((deptKey) => (
              <ContactItem key={deptKey} deptKey={deptKey} t={t} />
            ))}
          </div>

          <div className={styles.column}>
            <h2 className={styles.colTitle}>{t('contacts.visitCenterTitle')}</h2>
            {visitCenterDepts.map((deptKey) => (
              <ContactItem key={deptKey} deptKey={deptKey} t={t} />
            ))}
          </div>
        </div>

        <div className={styles.emergencyBlock}>
          <p className={styles.emergencyText}>{t('contacts.emergencyText')}</p>
          <a href="tel:+79286242520" className={styles.phone}>
            {t('contacts.emergencyPhone')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
