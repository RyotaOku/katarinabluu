import React, { useState } from 'react';
import { Calendar, momentLocalizer, Event, View } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';
import styles from '../styles/calendar_shift/calendar.module.css';
import VerticalMonthCalendar from './MonthCalendar';
import ShiftDetails from '@/pages/shift/shift_detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faBars } from '@fortawesome/free-solid-svg-icons';
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

  const shift_resign = () => {
    router.push(
      `/shift/shift_information?date=${moment(selectedDate).format('YYYY-MM-DD')}`,
    );
  };

  const shift_detail = () => {
    router.push(`/shift/shift_detail`);
  };

  const todayFormatted = moment(selectedDate).format('YYYY年MM月DD日(dd)');
  const dayPropGetter = (date: Date) => {
    if (selectedDate && moment(date).isSame(selectedDate, 'day'))
      return { className: styles.selectedDate };
    if (moment(date).isSame(new Date(), 'day'))
      return { className: styles.today };
    return {};
  };
  return (
    <div style={{ height: 'auto' }}>
      <div className={styles.switch}>
        <input
          type="checkbox"
          id="toggleSwitch"
          onChange={() => setShowVerticalCalendar(!showVerticalCalendar)}
        />
        <label
          className={styles.slider}
          htmlFor="toggleSwitch"
        ></label>
      </div>

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
      <div className={styles.shift}>
        <div style={{ fontSize: '15px' }}>{todayFormatted}</div>
        {part_time_jobs
          .filter(
            (job) => job.days === moment(selectedDate).format('YYYY-MM-DD'),
          )
          .map((job, index) => (
            <div
              key={index}
              className={styles['shift-job']}
              onClick={shift_detail}
            >
              <div className={styles['shift-time']}>
                <span>{job.start_time}</span>
                <span>{job.end_time}</span>
              </div>
              <div
                className={styles['shift-bar']}
                style={{
                  backgroundColor: job.colors,
                  color: job.colors,
                  fontSize: 'Large',
                }}
              >
                .
              </div>
              <div className={styles['shift-title']}>{job.job}</div>
            </div>
          ))}
        <div style={{ alignItems: 'center' }}>
          <button
            className={styles['add-shift-button']}
            onClick={shift_resign}
          >
            ✙新規シフトを追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCalendar;
