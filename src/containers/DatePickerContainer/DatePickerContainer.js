import React from 'react';
import {addDateRange} from '../../actions/dateRangePicker';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import DatePicker from "../../components/Main/FeedTitle/DatePicker/DatePicker";

class DatePickerContainer extends React.Component {
    render() {
        return (
            <DatePicker range={this.props.range} addDateRange={this.props.addDateRange}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        range: state.date.range
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDateRange: bindActionCreators(addDateRange, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerContainer);