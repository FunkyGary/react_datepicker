import React from 'react';
import Weekday from './Weekday';
import './DatePicker.css';

const weekdays =[
    'Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const weeks = getWeeksForMonth(2, 2018);
const WEEK_LENGTH = 7;

function getWeeksForMonth(month, year) {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [[]];

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push(null);
    }

    while (currentDate.getMonth() === month) {
        if (currentWeek.length === WEEK_LENGTH) {
            currentWeek = [];
            weeks.push(currentWeek);
        }
    }
    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() +1);

    while (currentWeek.length < 7) {
        currentWeek.push(null);
    }

    return weeks;
}

const weeksMarkup = weeks.map( (week, index) => {
    return (
        <div role='row' className='Week' key={index}>
            {'render week here'}
        </div>
    )
})

class Month extends React.PureComponent {
    render() {
        const weekDaysMarkup = weekdays.map(weekday => {
            return (
                <Weekday 
                    key={weekday}
                    title={abbrevationFromWeekday(weekday)}
                    label={weekday}
                />
            )
        })
        return (
            <React.Fragment>
                <div className="WeekdayContainer">{weekDaysMarkup}</div>
                {weeksMarkup}
            </React.Fragment>
        )
    }
}

function abbrevationFromWeekday(weekday) {
    return weekday.substring(0 , 2);
}

export default Month;