// A controller handle for getting a user by ID

exports.getProducts = async (req, res) => {
  try {

    const product = products;
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// A controller handle for creating a new user
exports.createProduct = (req, res) => {
  const { id, name, price } = req.body;
  products.push({id,name,price});
  // Logic to save the new user to the database
  res.status(201).json({ message: 'User created successfully', data: { id, name, price } });
};
