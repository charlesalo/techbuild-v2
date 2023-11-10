import express from 'express';
const router = express.Router();

// Home Page Route
router.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Home'
});
});

// About Page Route
router.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About'
});
});

// Contact Page Route
router.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact'
});
});

// Services Page Route
router.get('/services', (req, res) => {
  res.render('services', {
    pageTitle: 'Services'
});
});

// Career Page Route
router.get('/careers', (req, res) => {
  res.render('careers', {
    pageTitle: 'Careers'
});
});

export default router;