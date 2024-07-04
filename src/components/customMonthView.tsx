import React from 'react';
import moment from 'moment';

const CustomMonthView = ({ date, events }) => {
  const startOfMonth = moment(date).startOf('month');
  const endOfMonth = moment(date).endOf('month');
  const daysInMonth = [];

  for (
    let day = startOfMonth;
    day.isBefore(endOfMonth) || day.isSame(endOfMonth, 'day');
    day.add(1, 'days')
  ) {
    daysInMonth.push(day.clone());
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {daysInMonth.map((day) => (
        <div
          key={day.format('YYYY-MM-DD')}
          style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
        >
          <p style={{ margin: 0 }}>{day.format('YYYY-MM-DD')}</p>
          {events
            .filter((event) => moment(event.start).isSame(day, 'day'))
            .map((event, index) => (
              <p
                key={index}
                style={{ color: event.resource.color, margin: '5px 0' }}
              >
                {event.title}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
};

CustomMonthView.title = (date) =>
  `Custom Month View - ${moment(date).format('MMMM YYYY')}`;
CustomMonthView.navigate = (date, action) => {
  switch (action) {
    case 'PREV':
      return moment(date).subtract(1, 'months').toDate();
    case 'NEXT':
      return moment(date).add(1, 'months').toDate();
    default:
      return date;
  }
};
CustomMonthView.range = (date) => {
  const start = moment(date).startOf('month').toDate();
  const end = moment(date).endOf('month').toDate();
  return [start, end];
};

export default CustomMonthView;
