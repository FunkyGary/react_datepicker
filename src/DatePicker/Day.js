import React from 'react';

export default function Day({fullDate, onClick, selected}) {
    if (fullDate == null) {
        return <div className='EmptyStateDay' />
    }
    const date = fullDate.getDate();
    let className = 'Day';

    if (selected) {
        className = 'Day Day--selected'
    }

    return (
        <button className={className} onClick={onClick.bind(this, date)}>{date}</button>
    )
}