import React, { useState } from 'react';

function Calendar() {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];

    // use "useState" to manage currentDay
    const [currentDay] = useState(new Date());
    
    return(
        <div>
            <h1>Calendar App</h1>
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
        </div>
    );
}

export default Calendar