import React, { useState, useEffect } from 'react';
import eventsData from './data/eventsData.json';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { useEvent } from './context/EventContext';

const App = () => {
   const { selectedEvent, setSelectedEvent, filter, setFilter } = useEvent();
   const [filteredEvents, setFilteredEvents] = useState(eventsData);
   const [currentPage, setCurrentPage] = useState(0);

   useEffect(() => {
      const searchFilter = eventsData.filter(
         (event) =>
            (filter.category === 'All' || event.category === filter.category) &&
            (event.name.toLowerCase().includes(filter.search.toLowerCase()) ||
               event.location.toLowerCase().includes(filter.search.toLowerCase()))
      );
      setFilteredEvents(searchFilter);
      setCurrentPage(0);
   }, [filter]);

   const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
   };

   const eventsPerPage = 6;
   const displayedEvents = filteredEvents.slice(currentPage * eventsPerPage, (currentPage + 1) * eventsPerPage);
   const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

   return (
      <div className="p-6 max-w-4xl mx-auto">
         <a href='/'><h1 className="text-6xl font-bold text-center">EventSpot</h1><h1 className="text-4xl font-bold mb-6 text-center -mt-6 text-white">Lite</h1></a>
         <SearchBar onSearch={(search) => setFilter({ ...filter, search })} />
         <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {displayedEvents.map((event) => (
               <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
            ))}
         </div>
         <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
         {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </div>
   );
};

export default App;
