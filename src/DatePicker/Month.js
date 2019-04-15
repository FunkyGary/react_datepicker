import React from 'react';
import Weekday from './Weekday';
import './DatePicker.css';
import Day from './Day'

const weekdays =[
    'Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]


class Month extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderWeek = this.renderWeek.bind(this);
    }

    render() {
        const weekDaysMarkup = weekdays.map(weekday => {
            return (
                <Weekday 
                    key={weekday}
                    title={abbrevationFromWeekday(weekday)}
                    label={weekday}
                />
            )
        });

        const weeks = getWeeksForMonth(2, 2018);

        const weeksMarkup = weeks.map( (week, index) => {
            return (
                <div role='row' className='Week' key={index}>
                    {week.map(this.renderWeek)}
                </div>
            )
        })


        return (
            <React.Fragment>
                <div className="WeekdayContainer">{weekDaysMarkup}</div>
                {weeksMarkup}
            </React.Fragment>
        )
    }
    renderWeek(fullDate, dayIndex) {
        if (fullDate == null) {
            return <Day key={dayIndex} />;
        } 

        return (
            <Day 
                key={dayIndex}
                fullDate={fullDate}
            />
        )
    }
}

function abbrevationFromWeekday(weekday) {
    return weekday.substring(0 , 2);
}

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
  
      currentWeek.push(currentDate);
      currentDate = new Date(year, month, currentDate.getDate() + 1);
    }
  
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
  
    return weeks;
  }

export default Month;