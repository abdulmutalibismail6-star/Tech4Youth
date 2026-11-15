import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const coursesData = [
  {
    id: 1,
    title: 'HTML Fundamentals',
    description: 'Learn how to create website structures.',
    youtubeUrl: 'https://www.bing.com/videos/riverview/relatedvideo?q=learn+html+fundamentals+youtube+videos&mid=8689A7FDFFEB1E90A24C8689A7FDFFEB1E90A24C&churl=https%3a%2f%2fwww.youtube.com%2fchannel%2fUC8butISFwT-Wl7EV0hUK0BQ&FORM=VIRE',
  },
  {
    id: 2,
    title: 'CSS & Web Design',
    description: 'Learn how to style beautiful websites.',
    youtubeUrl: 'https://www.youtube.com/watch?v=OXGznpKZ_sA',
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Learn how to make websites interactive.',
    youtubeUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
  },
  {
    id: 4,
    title: 'React Development',
    description: 'Learn how to build websites with React.',
    youtubeUrl: 'https://www.youtube.com/watch?v=G6D9cBaLViA',
  },
  {
    id: 5,
    title: 'Node.js',
    description: 'Learn how to build backend applications.',
    youtubeUrl: 'https://www.youtube.com/watch?v=KOutPbKc9UM',
  },
  {
    id: 6,
    title: 'MongoDB',
    description: 'Learn how to store and manage data.',
    youtubeUrl: 'https://www.youtube.com/watch?v=c2M-rlkkT5o',
  },
  {
    id: 7,
    title: 'Git',
    description: 'Learn how to track changes in your code.',
    youtubeUrl: 'https://www.youtube.com/watch?v=8JJ101D3knE&t=35s',
  },
  {
    id: 8,
    title: 'GitHub',
    description: 'Learn how to upload and share your projects.',
    youtubeUrl: 'https://www.youtube.com/watch?v=pJYOG6klqj8',
  },
];

export default function Courses() {
  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          Tech <span className="logo-accent">4</span> Youth
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses" className="active-link">Courses</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      {/* Courses Hub Section */}
      <section className="courses-hero">
        <h1 className="courses-title">Explore Our Learning Hub</h1>
        <p className="courses-subtitle">
          Learn the skills you need to become a professional software developer.
        </p>

        {/* Courses Grid */}
        <div className="courses-grid">
          {coursesData.map((course) => (
            <div key={course.id} className="course-card">
              <h2 className="course-card-title">{course.title}</h2>
              <p className="course-card-desc">{course.description}</p>
              
              {/* External link pointing to YouTube, opening in a new tab safely */}
              <a 
                href={course.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary course-btn"
              >
                Watch Lessons <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Tech for Youth. All rights reserved.
      </footer>
    </div>
  );
}