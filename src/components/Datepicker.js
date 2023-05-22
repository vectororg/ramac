import React from 'react'
import { enUS, fi } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import { useTranslation } from 'react-i18next';
import 'react-day-picker/dist/style.css';
//import '../styles/daypicker.css';

export default function Datepicker(handleDayClick) {
  const [t, i18n] = useTranslation()
  const currLng = i18n.language
  const localeCompTable = {
    en: enUS,
    fin: fi,
  }

  return (
    <DayPicker
      locale={localeCompTable[currLng] ?? enUS}
      showOutsideDays
      fixedWeeks
      weekStartsOn={1}
      captionLayout="dropdown-buttons"
      required
      fromYear={1950}
      toDate={new Date()}
      onDayClick={(day) => handleDayClick(day)}
    />
  )
}