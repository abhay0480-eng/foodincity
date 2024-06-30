// src/App.js
import React, { useState } from 'react';
import CitySelection from './components/CitySelection';
import FoodRecommendations from './components/FoodRecommendations';
import PriceComparison from './components/PriceComparison';

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-300 p-4">
      <header className="text-center py-4 bg-blue-700 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Find out where locals eat🍜</h1>
      </header>
      <main className="container mx-auto p-4">
        <CitySelection onSelectCity={setSelectedCity} />
        {selectedCity && (
          <>
            <FoodRecommendations city={selectedCity} />
            <PriceComparison city={selectedCity} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
