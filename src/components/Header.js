import React from 'react';
import Banner from './Banner';
import { useTranslation } from 'react-i18next';


export default function Header() {
    const { t } = useTranslation();
  return (
    <header className='header'>
      <Banner
        imageUrl="https://vectorama.info/wp-content/uploads/2023/03/VEC2023_mainos_perus_16_9-e1677666350502.png"
        headline={t('header.headline')}
        message={t('header.message')}
      />
    </header>
  );
}
