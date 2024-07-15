import React, { useState } from 'react';
import { Calendar, momentLocalizer, Event, View } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';
import styles from '../styles/calendar_shift/calendar.module.css';
import VerticalMonthCalendar from './MonthCalendar';
import ShiftDetails from '@/pages/shift/shift_detail';

const localizer = momentLocalizer(moment);

const part_time_jobs = [
  {
    job: 'コンビニ店員',
    start_time: '08:00',
    end_time: '14:00',
    days: '2024-07-21',
    colors: '#FF4500',
  },
  {
    job: 'コンビニ店員',
    start_time: '08:00',
    end_time: '14:00',
    days: '2024-07-22',
    colors: '#FF4500',
  },
  {
    job: 'コンビニ店員',
    start_time: '08:00',
    end_time: '14:00',
    days: '2024-07-23',
    colors: '#FF4500',
  },
  {
    job: 'ファミリーレストランのキッチンスタッフ',
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
    colors: '#000000',
  },
  {
    job: 'ファミリーレストランのキッチンスタッフ',
    start_time: '09:00',
    end_time: '15:00',
    days: '2024-07-04',
    colors: '#008000',
  },
  {
    job: '工場のライン作業員',
    start_time: '06:00',
    end_time: '14:00',
    days: '2024-07-03',
    colors: '#FFF333',
  },
  {
    job: 'ファミリーレストランのキッチンスタッフ',
    start_time: '18:00',
    end_time: '23:00',
    days: '2024-07-01',
    colors: '#008000',
  },
];

const events: Event[] = part_time_jobs.map((job) => ({
  start: new Date(`${job.days}T${job.start_time}`),
  end: new Date(`${job.days}T${job.end_time}`),
  title: job.job,
  resource: { color: job.colors },
}));

const JobCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [view, setView] = useState<View>('month');
  const [showVerticalCalendar, setShowVerticalCalendar] =
    useState<boolean>(false);
  const router = useRouter();

  const handleSelectSlot = (slotInfo: { start: Date }) =>
    setSelectedDate(slotInfo.start);

  const dayPropGetter = (date: Date) => {
    if (selectedDate && moment(date).isSame(selectedDate, 'day'))
      return { className: styles.selectedDate };
    if (moment(date).isSame(new Date(), 'day'))
      return { className: styles.today };
    return {};
  };

  const shift_resign = () => {
    router.push(
      `/shift/shift_information?date=${moment(selectedDate).format('YYYY-MM-DD')}`,
    );
  };
  console.log(events);
  const shift_detail = () => {
    <ShiftDetails shift={events} />;
    router.push(`/shift/shift_detail`);
  };
  const todayFormatted = moment(selectedDate).format('YYYY年MM月DD日');
  const dayOfWeek = {
    Sunday: '日',
    Monday: '月',
    Tuesday: '火',
    Wednesday: '水',
    Thursday: '木',
    Friday: '金',
    Saturday: '土',
  }[moment(selectedDate).format('dddd')];

  return (
    <div style={{ height: 'auto' }}>
      <button onClick={() => setShowVerticalCalendar(!showVerticalCalendar)}>
        {showVerticalCalendar ?
          'Change to Horizontal View'
        : 'Change to Vertical View'}
      </button>
      {showVerticalCalendar ?
        <VerticalMonthCalendar />
      : <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable
          onSelectSlot={handleSelectSlot}
          dayPropGetter={dayPropGetter}
          eventPropGetter={(event) => ({
            style: { backgroundColor: event.resource?.color || '#3174ad' },
          })}
          view={view}
          onView={(view: View) => setView(view)}
          views={['month']}
        />
      }
      <div className="shift">
        <div style={{ fontSize: '15px' }}>
          {todayFormatted}({dayOfWeek})
        </div>
        <button onClick={shift_resign}>✙新規シフトを追加</button>
        {part_time_jobs
          .filter(
            (job) => job.days === moment(selectedDate).format('YYYY-MM-DD'),
          )
          .map((job, index) => (
            <div
              key={index}
              style={{ marginTop: '10px' }}
              onClick={shift_detail}
            >
              <p style={{ fontSize: '15px' }}>バイト先: {job.job}</p>
              <p style={{ fontSize: '15px' }}>開始時間: {job.start_time}</p>
              <p style={{ fontSize: '15px' }}>終了時間: {job.end_time}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobCalendar;
