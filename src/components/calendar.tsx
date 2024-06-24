// components/Calendar.tsx
import React, { useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';
import { text } from 'stream/consumers';

const localizer = momentLocalizer(moment);

const JobCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      start: new Date(),
      end: new Date(moment().add(1, 'hours').toDate()),
      title: 'Sample Event',
    },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = moment().format('YYYY年MM月DD日');
  const dayOfWeek = {
    'Sunday': '日',
    'Monday': '月',
    'Tuesday': '火',
    'Wednesday': '水',
    'Thursday': '木',
    'Friday': '金',
    'Saturday': '土'
  }[moment().format('dddd')];
  const shift = "今日シフトあるぜ"

  const router = useRouter();
  const handleSelectSlot = (slotInfo: { start: Date }) => {
    setSelectedDate(slotInfo.start);
  };
  // const handleSelectSlot = (slotInfo: { start: Date }) => {
  //   const selectedDate = moment(slotInfo.start).format('YYYY-MM-DD');
  //   router.push(`/information?date=${selectedDate}`);
  // };

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
      />
      <div className='shift'>
        <div style={{ fontSize: '15px' }}> {today}({dayOfWeek})</div>
        <button>✙新規シフトを追加</button>
        {shift && (
          <>
            {console.log("aaa")}
            <p style={{ fontSize: '15px' }}>{shift}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCalendar;
