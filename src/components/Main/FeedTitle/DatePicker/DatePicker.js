import React from 'react';
import styles from './DatePicker.module.css';
import 'react-day-picker/lib/style.css';
import * as moment from 'moment';
import DayPicker, {DateUtils} from "react-day-picker";
import Helmet from "react-helmet/es/Helmet";

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(day, modifiers = {}) {
        if (modifiers.disabled) {
            return;
        }
        const range = DateUtils.addDayToRange(day, this.props.range);
        this.props.addDateRange(range);
    };

    render() {
        const {from, to} = this.props.range;
        const modifiers = {start: from, end: to};
        return (
            <div className={styles.datePickerContainer}>
                <div className={styles.datePickerTitle}>
                    <a>Сегодня</a>
                    <a>За все время</a>
                    <a>Случайная дата</a>
                </div>
                <div className={styles.dates}>
                    {!from && !to && moment().format("M/D/YYYY")}
                    {from && !to && `${from.toLocaleDateString()}`}
                    {from &&
                    to &&
                    `${from.toLocaleDateString()}
                        ${to.toLocaleDateString()}`}{' '}
                </div>
                <div>
                    <DayPicker
                        className="Selectable"
                        numberOfMonths={2}
                        selectedDays={[from, {from, to}]}
                        modifiers={modifiers}
                        disabledDays={
                            {
                                after: new Date(moment().year(), moment().month(), moment().date())
                            }
                        }
                        onDayClick={this.handleDayClick}
                    />
                </div>
                <div className={styles.datePickerFooter}>
                    <button className={styles.showPostButton}>
                        Показать посты
                    </button>
                </div>
                <Helmet>
                    <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #8ac858 !important;
    color: white;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
  background-color: #8ac858 !important;
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
  background-color: #8ac858 !important;
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
                </Helmet>
            </div>
        );
    }
}