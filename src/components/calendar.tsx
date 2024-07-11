import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Event, View } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';
import styles from '../styles/calendar_shift/calendar.module.css';
import VerticalMonthCalendar from './MonthCalendar';

const localizer = momentLocalizer(moment);

const JobCalendar: React.FC = () => {
  const part_time_jobs: {
    job: string;
    start_time: string;
    end_time: string;
    days: string;
    colors: string;
  }[] = [
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

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [view, setView] = useState<View>('month');
  const [showVerticalCalendar, setShowVerticalCalendar] =
    useState<boolean>(false);
  const router = useRouter();

  const handleSelectSlot = (slotInfo: { start: Date }) => {
    setSelectedDate(slotInfo.start);
  };

  const shift_resign = () => {
    const selectedDateFormatted = moment(selectedDate).format('YYYY-MM-DD');
    router.push(`/shift/shift_information?date=${selectedDateFormatted}`);
  };

  const today = moment(selectedDate).format('YYYY-MM-DD');
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
    <div style={{ height: 'auto' }}>
      <button onClick={() => setShowVerticalCalendar(!showVerticalCalendar)}>
        {showVerticalCalendar ? 'change ' : 'change'}
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
          eventPropGetter={(
            event: Event,
            start: Date,
            end: Date,
            isSelected: boolean,
          ) => {
            const backgroundColor = event.resource?.color || '#3174ad';
            return { style: { backgroundColor } };
          }}
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
        {part_time_jobs && (
          <>
            {part_time_jobs.map((job, index) => (
              <div
                key={index}
                style={{ marginBottom: '10px' }}
              >
                {job.days === today ?
                  <>
                    <p style={{ fontSize: '15px' }}>バイト先: {job.job}</p>
                    <p style={{ fontSize: '15px' }}>
                      開始時間: {job.start_time}
                    </p>
                    <p style={{ fontSize: '15px' }}>終了時間: {job.end_time}</p>
                  </>
                : null}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default JobCalendar;
