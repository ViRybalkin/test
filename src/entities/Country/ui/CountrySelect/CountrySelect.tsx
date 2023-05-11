import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared';
import { CountrySelectProps } from '../../config';
import cls from './CountrySelect.module.scss';

const CountrySelect = forwardRef(({ readonly, onChange, value, ...otherProps }: CountrySelectProps, ref) => {
  const { t } = useTranslation('profilePage');
  const options = [
    {
      value: 'Russia',
      id: 'Russia',
    },
    {
      value: 'Belarus',
      id: 'Belarus',
    },
    {
      value: 'Ukraine',
      id: 'Ukraine',
    },
    {
      value: 'Kazahstan',
      id: 'Kazahstan',
    },
    {
      value: 'Armenia',
      id: 'Armenia',
    },
  ];

  return (
    <div className={cls.select}>
      <ListBox
        onChange={onChange}
        label={t('countryLabel')}
        options={options}
        value={value}
        fullWidth
        readonly={readonly}
        {...otherProps}
      />
    </div>
  );
});

export { CountrySelect };
