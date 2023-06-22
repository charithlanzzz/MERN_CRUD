import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../styles/style.css'; //

const EditItem = () => {

  useEffect(() => {
    document.title = 'Edit'; // Change the document title
  }, []);

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
    <div className="container">
      <h2>Edit Item</h2>
      <form onSubmit={updateItem} className="my-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div><br/>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div><br/>
        <div className="form-group">
  <button className="btn btn-success" type="submit">Update</button>
  <span className="button-space"></span>
  <Link to="/items" className="btn btn-secondary ml-2">Cancel</Link>
</div>

      </form>
    </div>
  );
};

export default EditItem;
