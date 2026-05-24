

export const newsData = [
  {

    id: 'festival-2026',
    previewImage: 'intro1.jpg',
    mainImage: 'intro1.jpg',
    bottomGallery: ['news1_1.jpg', 'news1_2.jpg', 'news1_3.jpg', 'news1_4.jpg', 'news1_5.jpg', 'news1_6.jpg', 'news1_7.jpg', 'news1_8.jpg'],
  },
  {
    id: 'vesna-v-kuchugurah',
    previewImage: 'intro2.jpg',
    mainImage: 'intro2.jpg',
    bottomGallery: ['news2_1.jpg', 'news2_2.jpg', 'news2_3.jpg', 'news2_4.jpg'],
  },
  {
    id: 'konferenciya-souza',
    previewImage: 'intro3.jpg', 
    mainImage: 'intro3.jpg',
    bottomGallery: ['news3_1.jpg', 'news3_2.jpg'],
  },
  {
    id: 'turnir-zapovednye-ostrova',
    previewImage: 'intro4.jpg',
    mainImage: 'intro4.jpg',
    bottomGallery: ['news4_1.jpg', 'news4_2.jpg', 'news4_3.jpg', 'news4_4.jpg', 'news4_5.jpg', 'news4_6.jpg', 'news4_7.jpg', 'news4_8.jpg'],
  },
  {
    id: 'issledovaniya-flory',
    previewImage: 'intro5.jpg',
    mainImage: 'intro5.jpg',
    bottomGallery: ['news5_1.jpg', 'news5_2.jpg', 'news5_3.jpg', 'news5_4.jpg'],
  },
  {
    id: 'puteshestvie-argonavtov',
    previewImage: 'intro6.jpg',
    mainImage: 'intro6.jpg',
    bottomGallery: ['news6_1.jpg', 'news6_2.jpg', 'news6_3.jpg', 'news6_4.jpg'],
  },
  {
    id: 'monitoring-loshadey',
    previewImage: 'intro7.jpg',
    mainImage: 'intro7.jpg',
    bottomGallery: ['news7_1.jpg', 'news7_2.jpg'],
  },
  {
    id: 'redkim-pticam',
    previewImage: 'intro8.jpg',
    mainImage: 'intro8.jpg',
    bottomGallery: ['news8_1.jpg', 'news8_2.jpg', 'news8_3.jpg', 'news8_4.jpg'],
  },
  {
    id: 'kurgannik-i-chelovek',
    previewImage: 'intro9.jpg',
    mainImage: 'intro9.jpg',
    bottomGallery: ['news9_1.jpg', 'news9_2.jpg', 'news9_3.jpg', 'news9_4.jpg'],
  },
];

export const getImageUrl = (filename, folder = 'news') => {
  return new URL(`../assets/images/${folder}/${filename}`, import.meta.url).href;
};
