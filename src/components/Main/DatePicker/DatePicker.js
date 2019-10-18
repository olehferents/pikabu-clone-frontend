import React from 'react';
import datePickerStyle from './DatePicker.module.css';
import 'react-day-picker/lib/style.css';
import * as moment from 'moment';
import DayPicker, {DateUtils} from "react-day-picker";
import Helmet from "react-helmet/es/Helmet";

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }

    handleDayClick(day, modifiers = {}) {
        if (modifiers.disabled) {
            return;
        }
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        console.log(range);
    }

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};
        return (
            <div className={datePickerStyle.datePickerContainer}>
                <div className={datePickerStyle.datePickerTitle}>
                    <a>Сегодня</a>
                    <a>За все время</a>
                    <a>Случайная дата</a>
                </div>
                <div className={datePickerStyle.dates}>
                    {!from && !to && moment().format("M/D/YYYY")}
                    {from && !to && `${from.toLocaleDateString()}`}
                    {from &&
                    to &&
                    `${from.toLocaleDateString()}
                        ${to.toLocaleDateString()}`}{' '}
                </div>
                <div className={datePickerStyle.datePickerContent}>
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