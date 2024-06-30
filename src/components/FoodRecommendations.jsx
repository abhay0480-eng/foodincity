// src/components/FoodRecommendations.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FoodRecommendations = ({ city }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (city) {
      fetch(`/api/food-recommendations/${city}`)
        .then(response => response.json())
        .then(data => setRecommendations(data));
    }
  }, [city]);

  return (
    <motion.div 
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">🍲 Food Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((food, index) => (
          <motion.div 
            key={food.name} 
            className="p-4 mb-4 border rounded shadow flex items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <img 
              src={food.image || 'placeholder.jpg'} 
              alt={food.name} 
              className="w-24 h-24 object-cover rounded mr-4" 
            />
            <div>
              <h3 className="text-xl font-semibold">{food.name} 🌮</h3>
              <p>{food.description}</p>
              <p className="text-green-600 font-bold">Price: ₹{food.price}</p>
            </div>
          </motion.div>
        ))
      ) : (
        <p>No recommendations available for {city}</p>
      )}
    </motion.div>
  );
};

export default FoodRecommendations;
