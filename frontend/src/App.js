import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Footer from './components/Footer';
import './styles/style.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Home</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/items">Item List</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/items/add" element={<AddItem />} />
            <Route path="/items/edit/:id" element={<EditItem />} />
          </Routes>
        </main>

        <footer>
          <hr/>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
