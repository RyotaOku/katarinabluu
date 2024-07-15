import React from 'react';
import JobCalendar from '@/components/calendar';
import styles from '@/styles/calendar_shift/shiftdetail.module.css';

const ShiftDetails = ({ shift }) => {
  console.log(shift);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.closeButton}>×</button>
        <h2 className={styles.title}>シフトの詳細</h2>
      </div>
      <div className={styles.details}>
        <div className={styles.row}>
          <div className={styles.label}>バイト先</div>
          {/* <div className={styles.value}>{shift.title}</div> */}
        </div>
        <div className={styles.row}>
          <div className={styles.label}>タイトル</div>
          <div className={styles.value}>{}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>開始日時</div>
          {/* <div className={styles.value}>{shift.start_time}</div> */}
        </div>
        <div className={styles.row}>
          <div className={styles.label}>終了日時</div>
          {/* <div className={styles.value}>{shift.end_time}</div> */}
        </div>
        <div className={styles.row}>
          <div className={styles.label}>休憩時間</div>
          <div className={styles.value}>{}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>給料</div>
          {/* <div className={styles.value}>{shift.salary}</div> */}
        </div>
        <div className={styles.row}>
          <div className={styles.label}>給料の個別設定</div>
          {/* <div className={styles.value}>{shift.salarySettings}</div> */}
        </div>
        <div className={styles.row}>
          <div className={styles.label}>メモ</div>
          {/* <div className={styles.value}>{shift.notes}</div> */}
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.completeButton}>完了する</button>
        <button className={styles.deleteButton}>削除する</button>
      </div>
    </div>
  );
};

export default ShiftDetails;
