import React from "react";
import './DatePicker.css';
import Month from './Month'

class DatePicker extends React.PureComponent {
    render() {
        const {fullDate, onDayClick} = this.props;
        
        const dateNumber = fullDate.getDate();
        const monthNumber = fullDate.getMonth();
        const yearNumber = fullDate.getFullYear();
        const monthName = getMonthName(monthNumber);
        return (
            <div className='DatePickerContainer'>
                <div className='DatePickerContainer_Title'>{monthName}</div>
                <Month />
            </div>
        )
    }
}

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

function getMonthName(index) {
    return months[index];
}

export default DatePicker;