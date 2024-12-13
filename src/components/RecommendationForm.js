import React, { useState, useEffect } from 'react';
import './RecommendationForm.css';  // Include CSS for styling

const RecommendationForm = ({ userPreferences }) => {
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);
  const [error, setError] = useState(null);

  
  const allItems = [
    {
      name: 'Chanel No. 5',
      image: 'https://images2.imgbox.com/b4/fb/3fNUkuei_o.png',
      notes: ['Rose', 'Jasmine', 'Vanilla', 'Sandalwood'],
      scentCategory: ['Floral', 'Elegant'],
      purchaseLink: 'https://www.chanel.com/ie/fragrance/chanel-number-5/'
    },
    {
      name: 'Dolce & Gabbana Light Blue',
      image: 'https://images2.imgbox.com/6e/c5/IjdYg4v7_o.png',
      notes: ['Cedarwood', 'Apple', 'Jasmine'],
      scentCategory: ['Citrus', 'Casual'],
      purchaseLink: 'https://google.com'
    },
    {
      name: 'Tom Ford Black Orchid',
      image: 'https://example.com/tom_ford_orchid.jpg',
      notes: ['Black Truffle', 'Vanilla', 'Lotus Wood'],
      scentCategory: ['Woody', 'Luxury'],
      purchaseLink: 'https://google.com'
    },
    {
      name: 'Miss Dior',
      image: 'https://images2.imgbox.com/be/d5/OXqNInWg_o.png',
      notes: ['Black Truffle', 'Vanilla', 'Lotus Wood'],
      scentCategory: ['Woody', 'Luxury'],
      purchaseLink: 'https://google.com'
    },
    {
      name: 'Item D',  // Example of an item with missing scentCategory
      image: 'https://example.com/item_d.jpg',
      notes: ['Amber', 'Vanilla'],
      scentCategory: [],  // Missing scent category
      purchaseLink: 'https://google.com'
    },
    // Add more items here
  ];

  const [perfumes, setPerfumes] = useState([allItems]); // Initialize with empty array

  // Fetch perfumes data
  // useEffect(() => {
  //   fetch('/api/perfumes')  // Replace with the correct API URL
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Perfumes data fetched:", data);
  //       setPerfumes(data);
  //     })
  //     .catch(err => {
  //       console.error('Error fetching perfumes:', err);
  //       setError('Failed to load perfumes');
  //     });
  // }, []);

  const filterPerfumesByPreferences = (perfumes, userPreferences) => {
    const { scent: preferredScents, category: preferredCategories } = userPreferences;
  
    return perfumes.filter((perfume) => {
      // Check if perfume's notes match any of the user's preferred scents
      const matchesScents = perfume.notes.some(note =>
        preferredScents.includes(note)
      );
  
      // Check if perfume's scentCategory matches any of the user's preferred categories
      const matchesCategories = perfume.scentCategory.some(category =>
        preferredCategories.includes(category)
      );
  
      // Include the perfume if it matches either scents or categories
      return matchesScents || matchesCategories;
    });
  };

  const matchingPerfumes = filterPerfumesByPreferences(allItems, userPreferences);

  console.log(matchingPerfumes);


  // Filter perfumes based on user preferences
  // useEffect(() => {
  //   if (perfumes && perfumes.length > 0 && userPreferences) {
  //     const filtered = perfumes.filter(perfume => {
  //       return (
  //         (userPreferences.scent.length === 0 || userPreferences.scent.some(scent => perfume?.scentCategory?.includes(scent))) &&
  //         (userPreferences.category.length === 0 || userPreferences.category.some(category => perfume?.category?.includes(category)))
  //       );
  //     });
  //     setFilteredPerfumes(filtered);
  //   }
  // }, [perfumes, userPreferences]); // Only run this effect when perfumes or user preferences change

  // Handle case when data is loading
  // if (error) {
  //   return <div className="error">Error: {error}</div>;
  // }

  // if (!perfumes || perfumes.length === 0) {
  //   return <div className="loading">Loading perfumes...</div>; // Show loading message until data is available
  // }

  return (
    <div className="recommendations-container">
      <h1>Perfume Recommendations</h1>
      {matchingPerfumes.length > 0 ? (
        <ul className="perfume-list">
          {matchingPerfumes.map((perfume, index) => (
            <li key={index} className="perfume-item">
              <div className="perfume-image-container">
                <img src={perfume.image} alt={perfume.name} className="perfume-image" />
              </div>
              <div className="perfume-details">
                <h2>{perfume.name}</h2>
                <p><strong>Scent:</strong> {perfume.scentCategory.join(', ')}</p>
                <p><strong>Notes:</strong> {perfume.notes.join(', ')}</p>
                {/* Buy Button */}
                <a href={perfume.purchaseLink} target="_blank" rel="noopener noreferrer">
                  <button className="buy-button">Buy</button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching perfumes found based on your preferences.</p>
      )}
    </div>
  );
  
};

export default RecommendationForm;
