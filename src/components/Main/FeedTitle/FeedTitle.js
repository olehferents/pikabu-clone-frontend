import React from 'react';
import styles from './FeedTitle.module.css';
import Popup from 'reactjs-popup';
import DatePickerContainer from "../../../containers/DatePickerContainer/DatePickerContainer";

const popupStyle = {
    width: styles.popup.width,
    height: styles.popup.height,
    padding: styles.popup.padding
};

export default class FeedTitle extends React.Component {
    render() {
        return (
            <div className={styles.feedTitle}>
                <Popup
                    contentStyle={popupStyle}
                    trigger={<button className={styles.triggerButton}>Выбрать дату</button>}>
                    <DatePickerContainer/>
                </Popup>
            </div>
        );
    }
}