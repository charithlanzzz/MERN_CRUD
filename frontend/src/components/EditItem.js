import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditItem = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/items/${id}`);
      const item = response.data;
      setName(item.name);
      setDescription(item.description);
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  const updateItem = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    try {
      await axios.put(`http://localhost:5000/items/${id}`, {
        name,
        description,
      });
      // Handle successful update, e.g., show a success message or redirect to item list
      navigate('/items');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={updateItem}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Update</button>
          <Link to="/items" className="btn btn-primary">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
