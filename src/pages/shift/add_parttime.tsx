// pages/information.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Modal from 'react-modal';
import styles from '@/styles/add_parttime.module.css';
import Navigation from '@/components/navigation';

const Part_Time: React.FC = () => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState('#FF4500');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isNightShiftPay, setIsNightShiftPay] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [overtime, setOvertime] = useState(false); //残業
  const salary_deadlines: string[] = Array.from(
    { length: 30 },
    (_, i) => `${i + 1}日`,
  ).concat('月末');
  const [selectedDeadline, setSelectedDeadline] = useState('月末');

  const handleDeadlineClick = () => {
    setModalIsOpen(true);
  };

  const handleDeadlineSelect = (value: string) => {
    setSelectedDeadline(value);
    setModalIsOpen(false);
  };
  const colors = [
    '#FF4500',
    '#FFA500',
    '#FFFF00',
    '#008000',
    '#00FFFF',
    '#0000FF',
    '#800080',
    '#FFC0CB',
  ];
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    setShowColorPicker(false);
  };
  //深夜時給の処理
  const [inputMode, setInputMode] = useState<'yen' | 'percent'>('yen');

  const overtimeClick = () => {
    setOvertime(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const salary_day = () => {
    router.push('/shift/salary_day'); //給料日の追加設定ボタンを押されたとき
  };

  return (
    <Navigation title={''}>
      <div className={styles.container}>
        <Head>
          <title>Add Part Time Page</title>
          <meta
            name="description"
            content="Information about shifts"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
        </Head>
        <h1
          onClick={() => router.back()}
          style={{ cursor: 'pointer' }}
        >
          ＜
        </h1>
        <main className={styles.main}>
          <h1>バイト先を追加</h1>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>基本情報</h2>
            <div className={styles.formGroup}>
              <label
                className={styles.label}
                htmlFor="partTime"
              >
                バイト先
              </label>
              <input
                type="text"
                id="partTime"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>表示色</label>
              <div className={styles.colorPickerWrapper}>
                <div
                  className={styles.selectedColor}
                  style={{ backgroundColor: selectedColor }}
                  onClick={() => setShowColorPicker(!showColorPicker)}
                ></div>
                {showColorPicker && (
                  <div className={styles.colorPicker}>
                    {colors.map((color) => (
                      <div
                        key={color}
                        className={styles.colorOption}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>給料情報</h2>
            <div
              onClick={handleDeadlineClick}
              className={styles.formGroup}
            >
              <label
                className={styles.label}
                htmlFor="deadline"
              >
                締切
              </label>
              <input
                type="text"
                id="deadline"
                className={styles.input}
                placeholder="毎月の月末 (祝日除く)"
                value={selectedDeadline}
                readOnly
              />
            </div>
            <div className={styles.formGroup}>
              <label
                className={styles.label}
                htmlFor="payday"
              >
                給料日
              </label>
              <input
                type="text"
                id="payday"
                className={styles.input}
                placeholder="当月25日 (祝日除く)"
              />
              <button
                className={styles.addButton}
                onClick={salary_day}
              >
                + 給料日の追加設定
              </button>
            </div>

            <div className={styles.formGroup}>
              <label
                className={styles.label}
                htmlFor="salary"
              >
                給料
              </label>
              <input
                type="text"
                id="salary"
                className={styles.input}
                placeholder="1000円"
              />
              <div className={styles.salaryType}>
                <label>
                  <input
                    type="radio"
                    name="salaryType"
                    value="hourly"
                    defaultChecked
                  />{' '}
                  時給
                </label>
                <label>
                  <input
                    type="radio"
                    name="salaryType"
                    value="daily"
                  />{' '}
                  日給
                </label>
              </div>
              <button className={styles.addButton}>+ 給料の追加設定</button>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.formGroup}>
              <label
                className={styles.label}
                htmlFor="transportation"
              >
                交通費
              </label>
              <input
                type="text"
                id="transportation"
                className={styles.input}
                placeholder="420円"
              />
              <label>
                <input
                  type="radio"
                  name="transportationLimit"
                  value="daily"
                  defaultChecked
                />{' '}
                一日
              </label>
              <label>
                <input
                  type="radio"
                  name="transportationLimit"
                  value="monthly"
                />{' '}
                一ヶ月
              </label>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.formGroup}>
              <label
                className={styles.label}
                htmlFor="holidayPay"
              >
                休日給料
              </label>
              <input
                type="text"
                id="holidayPay"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label
                className={styles.label}
                htmlFor="nightShiftPay"
              >
                深夜給料
              </label>
              <label>
                <input
                  type="radio"
                  name="nightShiftPay"
                  value="yes"
                  checked={isNightShiftPay}
                  onChange={() => setIsNightShiftPay(true)}
                />{' '}
                あり
              </label>
              <label>
                <input
                  type="radio"
                  name="nightShiftPay"
                  value="no"
                  checked={!isNightShiftPay}
                  onChange={() => setIsNightShiftPay(false)}
                />{' '}
                なし
              </label>
            </div>

            {isNightShiftPay && (
              <div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>深夜給料</label>
                  <input
                    type="text"
                    className={styles.inputField}
                    // value={inputValue}
                    onChange={handleInputChange}
                    placeholder={inputMode === 'yen' ? '円' : '%'}
                  />
                  <button
                    className={inputMode === 'yen' ? styles.button : ''}
                    onClick={() => setInputMode('yen')}
                  >
                    円
                  </button>
                  <button
                    className={inputMode === 'percent' ? styles.button : ''}
                    onClick={() => setInputMode('percent')}
                  >
                    %
                  </button>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>開始時間</label>
                  <input
                    type="time"
                    id="start"
                    name="start"
                    defaultValue={'22:00'}
                  />

                  <label className={styles.label}>終了時間</label>
                  <input
                    type="time"
                    id="end"
                    name="end"
                    defaultValue={'05:00'}
                  />
                </div>
              </div>
            )}

            <div>
              <div className={styles.formGroup}>
                <label
                  className={styles.label}
                  htmlFor="overtimePay"
                >
                  {' '}
                  残業手当{' '}
                </label>
                <label>
                  <input
                    type="radio"
                    name="overtime"
                    value="yes"
                    onChange={() => setOvertime(true)}
                  />
                  {' あり'}
                </label>
                <label>
                  <input
                    type="radio"
                    name="overtime"
                    value="no"
                    onChange={() => setOvertime(false)}
                  />
                  {'なし'}
                </label>
              </div>
              {overtime && (
                <div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>適用時間</label>
                    <input
                      type="text"
                      className={styles.inputField}
                      value={''}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className={styles.submitButton}>バイト先を追加する</button>
        </main>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalHeader}>
          <h2>締切を選択</h2>
          <button
            onClick={() => setModalIsOpen(false)}
            className={styles.modalCloseBtn}
          >
            閉じる
          </button>
        </div>
        <div className={styles.modalContent}>
          {salary_deadlines.map((value, index) => (
            <div
              key={index}
              onClick={() => handleDeadlineSelect(value)}
              className={styles.modalItem}
            >
              {value}
            </div>
          ))}
        </div>
      </Modal>
    </Navigation>
  );
};

export default Part_Time;
