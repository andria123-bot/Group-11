async function get (req, res, next) {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
    res.json(data);
  } catch (error) {
    next(error);
  }
  next();
  res.status(200).json({ message: 'GET request received.' });
  
}