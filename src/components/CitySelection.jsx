// src/components/CitySelection.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CitySelection = ({ onSelectCity }) => {
  const [cities, setCities] = useState(["Ahmdabad","Aligarh","Ajmer","Kasimpur"]);

  useEffect(() => {
    // Fetch cities from the backend
    fetch('/api/cities')
      .then(response => response.json())
      .then(data => setCities(data));
  }, []);

  return (
    <motion.div 
      className="p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">🌆 Select a City</h2>
      <select
        className="p-2 border rounded w-full"
        onChange={(e) => onSelectCity(e.target.value)}
      >
        <option value="">Select a city</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </motion.div>
  );
};

export default CitySelection;
