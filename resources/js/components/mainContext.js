
import React from 'react';
/* *************************************************************
|
|
|                     Main Context File
|
|       *  There stored all global contexts.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/


export const UserContext = React.createContext({ user: 'andrew' });

export const CalendarContext = React.createContext({ // I use this context in this project only for testing new react hook
  calendar_id: null,
  setCalendar: () => {}
});

export const CalendarNameContext = React.createContext({ // I use this context in this project only for testing new react hook
    calendarName: 'sdfsdf',
    setCalendarName: () => {}
  });
  