import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { DatePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Navigation from '@/components/navigation';

const Information: React.FC = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      router.push(`/information?date=${formattedDate}`);
    }
  };

  return (
    <div>
      <Head>
        <title>Shift Information Page</title>
        <meta
          name="description"
          content="Information about shifts"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navigation />
      <main>
        <h1>Shift を追加</h1>
        <div>
          <label htmlFor="company">バイト先</label>
          <input
            type="text"
            id="company"
            placeholder="バイト先を入力"
          />
        </div>
        <div>
          <label htmlFor="deadline">締切</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="締切"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <input {...params.inputProps} />}
              minDate={new Date('2020-01-01')}
              maxDate={new Date('2050-12-31')}
              disablePast
              inputFormat="yyyy-MM-dd"
            />
          </LocalizationProvider>
        </div>
        <div>
          <label htmlFor="payday">給料日</label>
          <input
            type="date"
            id="payday"
          />
        </div>
        <div>
          <label htmlFor="salary">給料</label>
          <input
            type="text"
            id="salary"
            placeholder="給料を入力"
          />
        </div>
        <div>
          <label htmlFor="individual">給料の個別設定</label>
          <input
            type="text"
            id="individual"
            placeholder="個別設定を入力"
          />
        </div>
        <div>
          <label htmlFor="memo">その他</label>
          <textarea
            id="memo"
            placeholder="メモを入力"
          ></textarea>
        </div>
        <button>完了する</button>
      </main>
    </div>
  );
};

export default Information;
