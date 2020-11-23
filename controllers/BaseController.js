const index = (req, res) => {
  res.status(200).render('index', { title: 'Home' });
};

module.exports = { index };
