// components/VerticalMonthCalendar.tsx
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ja'; //
import styles from '../styles/MonthCalendar.module.css';

const VerticalMonthCalendar: React.FC = () => {
  const [events, setEvents] = useState<
    {
      job: string;
      start_time: string;
      end_time: string;
      days: string;
      colors: string;
    }[]
  >([]);

  useEffect(() => {
    const part_time_jobs = [
      {
        job: 'コンビニ店員',
        start_time: '08:00',
        end_time: '14:00',
        days: '2024-07-21',
        colors: '#FF4500',
      },
      {
        job: 'レストランのウェイター',
        start_time: '17:00',
        end_time: '22:00',
        days: '2024-07-20',
        colors: '#008000',
      },
      {
        job: 'カフェのバリスタ',
        start_time: '07:00',
        end_time: '12:00',
        days: '2024-07-11',
        colors: '#008000',
      },
      {
        job: 'スーパーのレジスタッフ',
        start_time: '09:00',
        end_time: '15:00',
        days: '2024-07-04',
        colors: '#FF4500',
      },
      {
        job: '工場のライン作業員',
        start_time: '06:00',
        end_time: '14:00',
        days: '2024-07-03',
        colors: '#FF4500',
      },
      {
        job: 'ファミリーレストランのキッチンスタッフ',
        start_time: '18:00',
        end_time: '23:00',
        days: '2024-07-01',
        colors: '#FF4500',
      },
    ];

    setEvents(part_time_jobs);
  }, []);

  const renderDayEvents = (day: string) => {
    return events
      .filter((event) => event.days === day)
      .map((event, index) => (
        <div
          key={index}
          className={styles.event}
          style={{ borderColor: event.colors }}
        >
          <p style={{ color: event.colors }}>{event.job}</p>
          <p>
            {event.start_time} - {event.end_time}
          </p>
        </div>
      ));
  };

  const renderDaysInMonth = () => {
    const daysInMonth = moment().daysInMonth();
    const firstDayOfMonth = moment().startOf('month');
    const days = [];
    for (let i = 0; i < daysInMonth; i++) {
      const currentDay = firstDayOfMonth
        .clone()
        .add(i, 'days')
        .format('YYYY-MM-DD');
      days.push(
        <div
          key={currentDay}
          className={styles.day}
        >
          <p className={styles.date}>
            {firstDayOfMonth.clone().add(i, 'days').format('D (ddd)')}
          </p>
          {renderDayEvents(currentDay)}
        </div>,
      );
    }
    return days;
  };

  return (
    <div className={styles.verticalCalendarContainer}>
      {renderDaysInMonth()}
    </div>
  );
};

export default VerticalMonthCalendar;
