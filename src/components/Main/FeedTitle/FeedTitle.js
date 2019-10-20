import React from 'react';
import feedTitleStyle from './FeedTitle.module.css';
import Popup from 'reactjs-popup';
import DatePickerContainer from "../../../containers/DatePickerContainer/DatePickerContainer";

const popupStyle = {
    width: feedTitleStyle.popup.width,
    height: feedTitleStyle.popup.height,
    padding: feedTitleStyle.popup.padding
};

export default class FeedTitle extends React.Component {
    render() {
        return (
            <div className={feedTitleStyle.feedTitle}>
                <Popup
                    contentStyle={popupStyle}
                    trigger={<button className={feedTitleStyle.triggerButton}>Выбрать дату</button>}>
                    <DatePickerContainer/>
                </Popup>
            </div>
        );
    }
}