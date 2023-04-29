import React from 'react';
import Contact from './Contact';
import profile from "../images/edited profile1.jpg"
function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="hero-section">
        <h1>Welcome to my Portfolio</h1>
        <p>Here you will find information about my skills, experience, and projects.</p>
        <a href='#contact-me'><button className="cta-button">Get in Touch</button></a>
      </div>
      <div className="about-section">
        <h2>About Me</h2>

        <img src={profile} alt='profile.jpg' />
        <div className="about-content">
          <p>As a hardworking and motivated individual, I am adept at problem-solving and programming with a keen
            focus on producing clean, maintainable code. With a strong background in data structures and algorithms, I excel at designing optimal solutions for complex challenges. My ambition and determination drive me to pursue a career in software engineering with a specific focus on full stack development.</p>
          {/* <p>My expertise in mechanical engineering has taught me to think critically and logically, and to approach challenges with a systematic and data-driven mindset. I have honed my skills in project management, problem-solving, and communication, which have enabled me to collaborate effectively with cross-functional teams</p> */}
          <p>With my knowledge and experience, I am confident that I can bring value to your company. I am a quick learner and eager to take on new challenges, and I am committed to continuous learning and self-improvement.</p>
        </div>
      </div>

      <div className="services-section">
        <h2>My Projects</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-code"></i>
            <a href="https://car-rental-frontend-pt7r.onrender.com" rel="noreferrer" target="_blank"><h3>Car Rental</h3></a>
            <p>Our car rental platform allows rental agencies to post available cars for rent, which users can easily book and manage in their cart. Rental agencies can view rented cars and manage their listings, while users can quickly and conveniently rent a car. Our platform provides a user-friendly and efficient solution for all car rental needs.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-code"></i>
            <a href="https://laundary-frontend-g19.onrender.com" rel="noreferrer" target="_blank"><h3>Laundry Cart</h3></a>
            <p>The laundry cart website allows you to choose your desired wash type and make a booking for your laundry order. You can also view and cancel your order through the website.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-paint-brush"></i>
            <a href='https://snapshot-n7bm.onrender.com' rel="noreferrer" target="_blank"><h3>Snapshot</h3></a>
            <p> Snapshot website allows you to search for specific types of pictures by entering your search text in the search bar. Once you click on search, the website displays the desired photos.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-mobile-alt"></i>
            <a href="https://react-movie-search-00hm.onrender.com" rel="noreferrer" target="_blank"><h3>Movie searcher</h3></a>
            <p>Movie search website allows you to search for specific types of movies by entering your search text in the search bar. Once you click on search, the website displays the desired movie with its photo and description.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-mobile-alt"></i>
            <a href='https://ecpense-tracker.onrender.com' rel="noreferrer" target="_blank"><h3>Expense Tracker</h3></a>
            <p>Expense tracker is a simple tool that helps you keep track of your purchases by allowing you to record the item name, price, and date of purchase.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-mobile-alt"></i>
            <a href="https://react-todo-app-qsiz.onrender.com" rel="noreferrer" target="_blank"><h3>Todo App</h3></a>
            <p>A todo app is a tool for managing tasks that enables you to add and remove items from your list as needed. It helps you keep track of your to-dos in a convenient and organized way, making it easier to prioritize and complete tasks efficiently.</p>
          </div>
        </div>
      </div>
      <div className="skills" >
        <h2>Skills</h2>
        <ul id="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Basic Python</li>
          <li>Github</li>
        </ul>
      </div>
      <div className="contact-section">
        <h2 id='contact-me'>Contact Me</h2>
        <Contact />
      </div>
      <div className="footer-section">
        <p>Copyright © 2023</p>
      </div>
    </div>
  );
}

export default Portfolio;
