import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const addItem = async () => {
    try {
      await axios.post('http://localhost:5000/items', { name, description });
      // Handle successful addition, e.g., show a success message or redirect to item list
      navigate('/items');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <button type="button" onClick={addItem}>Add</button>
          <Link to="/items" className="btn btn-primary">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
