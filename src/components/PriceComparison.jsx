// src/components/PriceComparison.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PriceComparison = ({ city }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (city) {
      fetch(`/api/price-comparison/${city}`)
        .then(response => response.json())
        .then(data => setPrices(data));
    }
  }, [city]);

  return (
    <motion.div 
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">💸 Price Comparison</h2>
      {prices.length > 0 ? (
        <motion.table 
          className="min-w-full bg-white border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead>
            <tr>
              <th className="p-4 border">🥘 Food Item</th>
              <th className="p-4 border">💰 Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <td className="p-4 border">{item.name}</td>
                <td className="p-4 border">{item.price}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      ) : (
        <p>No price data available for {city}</p>
      )}
    </motion.div>
  );
};

export default PriceComparison;
