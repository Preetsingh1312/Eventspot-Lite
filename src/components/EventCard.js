import { motion } from 'framer-motion';

const EventCard = ({ event, onClick }) => (
   <motion.div
      className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-2xl transition-transform"
      whileHover={{ scale: 1.03 }}
      onClick={() => onClick(event)}
   >
      <img src={event.image} alt={event.name} className="h-40 w-full object-cover rounded" />
      <div className="p-2">
         <h2 className="text-xl font-bold">{event.name}</h2>
         <p>{event.date} - {event.location}</p>
         <span className="text-sm text-gray-500">{event.category}</span>
      </div>
   </motion.div>
);

export default EventCard;
