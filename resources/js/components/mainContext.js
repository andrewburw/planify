
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


export const UserContext = React.createContext({ // I use this context in this project only for testing new react hook
  user_name: null,
  setUserName: () => {}
});
export const AvatarContext = React.createContext({ 
 avatar: null,
  setAvatar: () => {}
});

export const CalendarContext = React.createContext({ 
  calendar_id: null,
  setCalendar: () => {}
});

export const CalendarNameContext = React.createContext({ 
    calendarName: 'sdfsdf',
    setCalendarName: () => {}
});

