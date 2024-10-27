import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => (
   <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
   >
      <motion.div
         className="bg-white rounded-lg max-w-md p-6 shadow-lg"
         onClick={(e) => e.stopPropagation()}
         initial={{ y: "-100vh" }}
         animate={{ y: "0" }}
         exit={{ y: "-100vh" }}
      >
         <h2 className="text-2xl font-bold">{event.name}</h2>
         <img src={event.image} alt={event.name} className="h-64 w-full object-cover rounded mt-4" />
         <p className="mt-4 text-gray-600">{event.description}</p>
         <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </motion.div>
   </motion.div>
);

export default EventModal;
