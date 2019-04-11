import React from "react";
import './DatePicker.css';
import Month from './Month'

class DatePicker extends React.PureComponent {
    render() {
        return (
            <div className='DatePickerContainer'>
                <div className='DatePickerContainer_Title'>{'March'}</div>
                <Month />
            </div>
        )
    }
}

export default DatePicker;