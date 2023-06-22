import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddItem = () => {

  useEffect(() => {
    document.title = 'Add'; // Change the document title
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    addItem();
  };

  return (
    <div className="container">
      <h2>Add Item</h2>
      <form className="my-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <div>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please enter a name.</div>
          </div>
        </div><br/>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <div>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <div className="invalid-feedback">Please enter a description.</div>
          </div>
        </div><br/>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
          <span className="button-space"></span>
          <Link to="/items" className="btn btn-secondary ml-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
