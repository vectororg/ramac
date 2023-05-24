import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const LanguageSwitcher = () => {
  const [radioValue, setRadioValue] = useState('en');

  const radios = [
    { name: 'English', value: 'en' },
    { name: 'French', value: 'fr' },
  ];

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    setRadioValue(language);
    i18n.changeLanguage(language);
    // Additional logic or function calls related to language change
  };

  return (
    <div>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={() => changeLanguage(radio.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default LanguageSwitcher;
