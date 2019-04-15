import React from "react";
import './Datepicker.css';

class DatePicker extends React.PureComponent {
    render() {
        return (
            <div className='DatePickerContainer'>
                <div className='DatePickerContainer_Title'>{'March'}</div>
                <div className="SomeMonth"></div>
            </div>
        )
    }
}

export default DatePicker;