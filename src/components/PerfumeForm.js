import React, { useState, useEffect } from 'react';

const PerfumeForm = ({ userPreferences }) => {
  const [matchingItems, setMatchingItems] = useState([]);

  useEffect(() => {
    // Ensure userPreferences.scent is defined before proceeding
    if (!userPreferences || !userPreferences.scent || userPreferences.scent.length === 0) {
      console.log('No scent preferences available.');
      return; // Exit if scent preferences are not available
    }

    // Static example list of items (can be replaced with real data if needed)
    const allItems = [
      {
        name: 'Chanel No. 5',
        image: 'https://example.com/chanel_no5.jpg',
        notes: ['Rose', 'Jasmine', 'Vanilla', 'Sandalwood'],
        scentCategory: ['Floral', 'Elegant'],
      },
      {
        name: 'Dolce & Gabbana Light Blue',
        image: 'https://example.com/dolce_lightblue.jpg',
        notes: ['Cedarwood', 'Apple', 'Jasmine'],
        scentCategory: ['Citrus', 'Casual'],
      },
      {
        name: 'Tom Ford Black Orchid',
        image: 'https://example.com/tom_ford_orchid.jpg',
        notes: ['Black Truffle', 'Vanilla', 'Lotus Wood'],
        scentCategory: ['Woody', 'Luxury'],
      },
      {
        name: 'Item D',  // Example of an item with missing scentCategory
        image: 'https://example.com/item_d.jpg',
        notes: ['Amber', 'Vanilla'],
        scentCategory: [],  // Missing scent category
      },
      // Add more items here
    ];

    // Filter items based on user's scent preferences
    const filteredItems = allItems.filter((item) => {
      // Exclude items with no scentCategory
      if (!item.scentCategory || item.scentCategory.length === 0) {
        return false;
      }

      // Check if any user's scent preference matches the item's scentCategory
      return userPreferences.scent.some((userScent) =>
        item.scentCategory.includes(userScent)
      );
    });

    setMatchingItems(filteredItems); // Set matching items
  }, [userPreferences]);

  return (
    <div>
      <h1>Matches</h1>
      {matchingItems.length > 0 ? (
        <div className="item-list">
          {matchingItems.map((item, index) => (
            <div key={index} className="item">
              <img 
                src={item.image || 'https://via.placeholder.com/150'} // Fallback image if the item image is missing
                alt={item.name} 
                className="item-image" 
              />
              <h2>{item.name}</h2>
              <ul>
                {item.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching items found. Adjust your preferences.</p>
      )}
    </div>
  );
};

export default PerfumeForm;
