import Order from "../config/schemas/orderSchema.js";
import Product from "../config/schemas/productSchema.js";
import User from "../config/schemas/user.schema.js";

// Add a new product (admin functionality)
export const addProduct = async (req, res) => {
  const { name, category, price, description, image } = req.body;

  try {
    // Validate input fields
    if (!name || !category || !price || !description) {
      return res.status(400).json({
        msg: "All fields are required."
      });
    }

    // Create new product
    const newProduct = new Product({
      name,
      category,
      price,
      description,
      image,
    });

    await newProduct.save();

    return res.status(201).json({
      msg: "Product added successfully.",
      product: newProduct
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({
      msg: "An error occurred while adding the product."
    });
  }
};

// Update a product by ID (admin functionality)
export const updateProduct = async (req, res) => {
  const { productId } = req.params;  // Get productId from route params
  const { name, category, price, description, image } = req.body;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        msg: "Product not found."
      });
    }

    // Update product fields if provided
    if (name) product.name = name;
    if (category) product.category = category;
    if (price) product.price = price;
    if (description) product.description = description;
    if (image) product.image = image;

    await product.save();

    return res.status(200).json({
      msg: "Product updated successfully.",
      product
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      msg: "An error occurred while updating the product."
    });
  }
};

// Delete a product by ID (admin functionality)
export const deleteProduct = async (req, res) => {
  const { productId } = req.params;  // Get productId from route params

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        msg: "Product not found."
      });
    }

    // Delete the product
    await product.remove();

    return res.status(200).json({
      msg: "Product deleted successfully."
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({
      msg: "An error occurred while deleting the product."
    });
  }
};

// Get all users (for admin purposes)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Get all users from the database
    return res.status(200).json({
      msg: "All users retrieved successfully.",
      users
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      msg: "An error occurred while fetching the users."
    });
  }
};

// Get sales and order statistics for admin
export const getOrderStats = async (req, res) => {
  try {
    // Get the total number of orders
    const totalOrders = await Order.countDocuments();

    // Get the total sales (sum of all orders' total amounts)
    const totalSales = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]);

    // Get orders by status (for example, 'Pending', 'Shipped', etc.)
    const orderStatusStats = await Order.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    return res.status(200).json({
      msg: "Order statistics retrieved successfully.",
      totalOrders,
      totalSales: totalSales[0]?.total || 0,
      orderStatusStats
    });
  } catch (error) {
    console.error("Error fetching order stats:", error);
    return res.status(500).json({
      msg: "An error occurred while fetching order stats."
    });
  }
};



