import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const useEvent = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
   const [selectedEvent, setSelectedEvent] = useState(null);
   const [filter, setFilter] = useState({ search: '', category: 'All' });

   return (
      <EventContext.Provider value={{ selectedEvent, setSelectedEvent, filter, setFilter }}>
         {children}
      </EventContext.Provider>
   );
};
