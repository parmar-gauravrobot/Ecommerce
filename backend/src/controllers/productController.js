
// Assuming you have a Product model

import Product from "../config/schemas/productSchema.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      msg: "All products fetched successfully.",
      products
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      msg: "An error occurred while fetching products."
    });
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  const { productId } = req.params;  // Get productId from route params
  
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        msg: "Product not found."
      });
    }
    
    return res.status(200).json({
      msg: "Product fetched successfully.",
      product
    });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return res.status(500).json({
      msg: "An error occurred while fetching the product."
    });
  }
};

// Search products based on query params (name, category, price range)
export const searchProducts = async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;
  
  try {
    const query = {};
    
    // Build search query based on parameters
    if (name) {
      query.name = { $regex: name, $options: 'i' };  // Case-insensitive match
    }
    if (category) {
      query.category = { $regex: category, $options: 'i' };
    }
    if (minPrice && maxPrice) {
      query.price = { $gte: minPrice, $lte: maxPrice };
    }

    const products = await Product.find(query);
    return res.status(200).json({
      msg: "Products fetched based on search criteria.",
      products
    });
  } catch (error) {
    console.error("Error searching products:", error);
    return res.status(500).json({
      msg: "An error occurred while searching products."
    });
  }
};

