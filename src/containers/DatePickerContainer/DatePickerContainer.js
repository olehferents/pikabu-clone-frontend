import React from 'react';
import {addDateRange} from '../../actions/index';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import DatePicker from "../../components/Main/DatePicker/DatePicker";

class DatePickerContainer extends React.Component {
    render() {
        return (
            <DatePicker/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        range: state.range
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDateRange: bindActionCreators(addDateRange, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);