'use client';

import icons, {Icon} from '@app/library/icons';
import {notNil} from '@growthops/ext-ts';
import {isFuture, isToday} from 'date-fns';
import {useCallback, useMemo, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DateSelectorProperties = {
  id: string;
  label: string;
  icon?: Icon;
};

const DateSelector = ({
  id,
  label,
  icon,
}: DateSelectorProperties): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  const Icon = useMemo(() => icons[icon as keyof typeof icons], []);

  const isTodayOrFuture = useCallback((date: Date): boolean => {
    return isToday(date) || isFuture(date);
  }, []);

  const handleDateChange = useCallback((date: Date) => {
    setStartDate(date);
  }, []);

  return (
    <div>
      <label htmlFor={id} className="flex space-x-2 items-center text-xl">
        {notNil(Icon) && (
          <Icon className="w-7 text-brand-gold stroke-current" />
        )}
        <span>{label}</span>
      </label>
      <DatePicker
        id={id}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        className="mt-1 w-full text-brand-charcoal p-2.5 rounded-md"
        calendarClassName="custom-calendar"
        selected={startDate}
        filterDate={isTodayOrFuture}
        onChange={handleDateChange}
      />
    </div>
  );
};
export default DateSelector;

export type {DateSelectorProperties as DateSelectorProps};
