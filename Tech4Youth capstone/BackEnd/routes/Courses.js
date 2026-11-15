const express = require('express');
const Course = require('../models/Course');

const router = express.Router();

// @route   GET /api/courses
// @desc    Get all courses
router.get('/', async (req, res) => {
  try {
    let courses = await Course.find();

    // If no courses exist yet, auto-seed your 8 default courses
    if (courses.length === 0) {
      const defaultCourses = [
        { title: 'HTML5 & CSS3 Essentials', description: 'Learn the foundational building blocks of modern web development.', youtubeUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc' },
        { title: 'JavaScript Fundamentals', description: 'Master core programming concepts, DOM manipulation, and ES6+ features.', youtubeUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk' },
        { title: 'React.js Frontend Development', description: 'Build dynamic, component-based user interfaces with modern React hooks.', youtubeUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk' },
        { title: 'Node.js & Express Backend', description: 'Build robust server-side applications and RESTful APIs.', youtubeUrl: 'https://www.youtube.com/watch?v=Oe421EPjeBE' },
        { title: 'MongoDB Database Management', description: 'Design NoSQL schemas and manage collections with Mongoose.', youtubeUrl: 'https://www.youtube.com/watch?v=ExcRbA7fy_A' },
        { title: 'Python for Beginners', description: 'Start your coding journey with clean and readable Python syntax.', youtubeUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
        { title: 'FastAPI Web Services', description: 'Build high-performance, modern Python APIs with automatic Swagger documentation.', youtubeUrl: 'https://www.youtube.com/watch?v=SORiTsvnrt4' },
        { title: 'Git & GitHub Version Control', description: 'Manage code changes, collaborate with teams, and deploy projects.', youtubeUrl: 'https://www.youtube.com/watch?v=RGOj5yH7evk' },
      ];

      courses = await Course.insertMany(defaultCourses);
    }

    res.json(courses);
  } catch (error) {
    console.error('Fetch Courses Error:', error);
    res.status(500).json({ message: 'Server error while fetching courses.' });
  }
});

module.exports = router;