import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';
import styles from '../styles/calendar.module.css';

const localizer = momentLocalizer(moment);

const JobCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      start: new Date(),
      end: new Date(moment().add(1, 'hours').toDate()),
      title: 'Sample Event',
    },
  ]);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const router = useRouter();

  const handleSelectSlot = (slotInfo: { start: Date }) => {
    setSelectedDate(slotInfo.start);
  };
  const shift = 'シフト時間'; //shiftがある時、働く時間帯を表示

  const shift_resign = () => {
    const selectedDateFormatted = moment(selectedDate).format('YYYY-MM-DD');
    router.push(`/shift_information?date=${selectedDateFormatted}`);
  };

  const today = moment(selectedDate).format('YYYY年MM月DD日');
  const dayOfWeek = {
    //日付をとる処理
    Sunday: '日',
    Monday: '月',
    Tuesday: '火',
    Wednesday: '水',
    Thursday: '木',
    Friday: '金',
    Saturday: '土',
  }[moment(selectedDate).format('dddd')];

  const dayPropGetter = (date: Date) => {
    if (selectedDate && moment(date).isSame(selectedDate, 'day')) {
      return { className: styles.selectedDate };
    }
    if (moment(date).isSame(new Date(), 'day')) {
      return { className: styles.today };
    }
    return {};
  };

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        dayPropGetter={dayPropGetter}
      />
      <div className="shift">
        <div style={{ fontSize: '15px' }}>
          {today}({dayOfWeek})
        </div>
        <button onClick={shift_resign}>✙新規シフトを追加</button>
        {shift && (
          <>
            <p style={{ fontSize: '15px' }}>{shift}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCalendar;
