
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Feedback.module.css';

const Feedback = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Новые состояния для управления ошибками и статусом
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' если отправлено

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Если пользователь начал исправлять поле, убираем ошибку
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Проверка email: должна быть @ и точка
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    // Проверка телефона (РФ/СНГ форматы: +7, 8, скобки, тире)
    const phoneRegex = /^(?:\+7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    // Очищаем от пробелов перед проверкой
    const cleanPhone = formData.phone.replace(/\s+/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Неверный формат телефона';
    }

    setErrors(newErrors);
    // Возвращаем true, если объект ошибок пустой (форма валидна)
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Если валидация не пройдена, прерываем отправку
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Имитируем реальную отправку на сервер (задержка 1.5 секунды)
    setTimeout(() => {
      console.log(t('home.feedback.consoleLog'), formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Прячем сообщение об успехе через 5 секунд
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section className={styles.feedbackSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('home.feedback.sectionTitle')}</h2>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder={t('home.feedback.namePlaceholder')}
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder={t('home.feedback.emailPlaceholder')}
            // Если есть ошибка, добавляем класс ошибки
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            placeholder={t('home.feedback.phonePlaceholder')}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}

          <textarea
            name="message"
            placeholder={t('home.feedback.messagePlaceholder')}
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : t('home.feedback.submitButton')}
          </button>
          {/* Показываем сообщение об успехе без дурацких алертов */}
          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              Сообщение успешно отправлено!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Feedback;
