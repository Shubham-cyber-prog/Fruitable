// App.jsx
import React, { useState } from 'react';
import './App.css';
import './index.css'
import logo from "./img/logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';





function App() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [activeCarouselItem, setActiveCarouselItem] = useState(0);
  const [activeTab, setActiveTab] = useState('tab-1');
  const [navMenuActive, setNavMenuActive] = useState(false);

const carouselItems = [
  {
    id: 1,
       image: "https://themewagon.github.io/fruitables/img/hero-img-1.png",
    text: "Fruits"
  },
  {
    id: 2,
    image: "https://themewagon.github.io/fruitables/img/hero-img-2.jpg",
    text: "Vegetables"
  }
];
const features = [
  {
    icon: "fas fa-car-side",
    title: "Free Shipping",
    description: "Free on order over $300"
  },
  {
    icon: "fas fa-user-shield",
    title: "Security Payment",
    description: "100% security payment"
  },
  {
    icon: "fas fa-exchange-alt",
    title: "30 Day Return",
    description: "30 day money guarantee"
  },
  {
    icon: "fas fa-phone-alt",
    title: "24/7 Support",
    description: "Support every time fast"
  }
];


  const tabs = [
    { id: "tab-1", label: "All Products" },
    { id: "tab-2", label: "Vegetables" },
    { id: "tab-3", label: "Fruits" },
    { id: "tab-4", label: "Bread" },
    { id: "tab-5", label: "Meat" }
  ];

  const products = [
    {
      id: 1,
      image: "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
      category: "Fruits",
      name: "Grapes",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 2,
      image: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
      category: "Fruits",
      name: "Raspberries",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 3,
      image: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
      category: "Fruits",
      name: "Apricots",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 4,
      image: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
      category: "Fruits",
      name: "Banana",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
     {
      id: 5,
      image: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      category: "Fruits",
      name: "Grapes",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 6,
      image: "https://themewagon.github.io/fruitables/img/vegetable-item-1.jpg",
      category: "Fruits",
      name: "Raspberries",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 7,
      image: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
      category: "Fruits",
      name: "Apricots",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 8,
      image: "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
      category: "Fruits",
      name: "Banana",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    }
  ];

  // Event handlers
  const handleCarouselPrev = () => {
    setActiveCarouselItem(prev => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleCarouselNext = () => {
    setActiveCarouselItem(prev => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const toggleNavMenu = () => {
    setNavMenuActive(!navMenuActive);
  };

  return (
    <div className="app">
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-content">
          <div className="top-info">
            <span><i className="fas fa-map-marker-alt"></i> 123 Street, New York</span>
            <span><i className="fas fa-envelope"></i> Email@Example.com</span>
          </div>
          <div className="top-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
         
         
           <a href="/" className="logo">
          <img src={logo} alt="Fruitables Logo"/>
             </a>

          <button className="menu-toggle" onClick={toggleNavMenu}>
            <i className="fas fa-bars"></i>
          </button>
          
          <div className={`nav-menu ${navMenuActive ? 'active' : ''}`}>
            <a href="/" className="nav-link active">Home</a>
            <a href="/shop" className="nav-link">Shop</a>
            <a href="/shop-detail" className="nav-link">Shop Detail</a>
            <div className="dropdown">
              <button className="dropbtn">Pages <i className="fas fa-chevron-down"></i></button>
              <div className="dropdown-content">
                <a href="/cart">Cart</a>
                <a href="/checkout">Checkout</a>
                <a href="/testimonial">Testimonial</a>
                <a href="/404">404 Page</a>
              </div>
            </div>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
          
          <div className="nav-icons">
            <button className="search-btn" onClick={() => setShowSearchModal(true)}>
              <i className="fas fa-search"></i>
            </button>
            <a href="/cart" className="cart-icon">
              <i className="fas fa-shopping-bag"></i>
              <span className="cart-count">3</span>
            </a>
            <a href="/account" className="user-icon">
              <i className="fas fa-user"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {showSearchModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Search by keyword</h3>
              <button onClick={() => setShowSearchModal(false)} className="close-btn">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="search-input-group">
                <input type="text" placeholder="keywords" />
                <button className="search-submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h4>100% Organic Foods</h4>
            <h1>Organic Veggies & Fruits Foods</h1>
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button className="search-btn">Submit Now</button>
            </div>
          </div>
          
          <div className="hero-carousel">
            <div className="carousel-inner">
              {carouselItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`carousel-item ${index === activeCarouselItem ? 'active' : ''}`}
                >
                  <img src={item.image} alt={item.text} />
                  <a href="#" className="carousel-btn">{item.text}</a>
                </div>
              ))}
            </div>
            <button className="carousel-control prev" onClick={handleCarouselPrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-control next" onClick={handleCarouselNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={`${feature.icon} fa-3x`}></i>
                </div>
                <div className="feature-content">
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fruits Shop Section */}
      <section className="fruits-section">
        <div className="container">
          <div className="section-header">
            <div className="header-text">
              <h1>Our Organic Products</h1>
            </div>
            <div className="tabs-container">
              <div className="tabs">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="tab-content">
            {activeTab === 'tab-1' && (
              <div className="products-grid">
                {products.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <span className="product-category">{product.category}</span>
                    </div>
                    <div className="product-details">
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <div className="product-footer">
                        <p className="price">{product.price}</p>
                        <button className="add-to-cart">
                          <i className="fas fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

