import React, { useState } from 'react';

const PerfumeForm = () => {
  const [perfumeData, setPerfumeData] = useState({
    name: '',
    description: '',
    type: '',
    brand: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfumeData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7777/choosescents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(perfumeData)
    });
    const data = await response.json();
    alert(data.message || 'Perfume added successfully');
  };

  return (
    <div className="form-container">
      <h2>Add Perfume</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Perfume Name" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input type="text" name="type" placeholder="Type (e.g., Floral)" onChange={handleChange} />
        <input type="text" name="brand" placeholder="Brand" onChange={handleChange} />
        <input type="url" name="image" placeholder="Image URL" onChange={handleChange} />
        <button type="submit">Add Perfume</button>
      </form>
    </div>
  );
};

export default PerfumeForm;
