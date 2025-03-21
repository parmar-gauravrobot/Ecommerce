import Cart from "../config/schemas/cartSchema.js";
import Product from "../config/schemas/productSchema.js";

// Add an item to the cart
export const addItemToCart = async (req, res) => {
  const { userId } = req.user; // Assuming you get the userId from authentication (e.g., JWT token)
  const { productId, quantity } = req.body; // productId and quantity in request body

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        msg: "Product not found."
      });
    }

    // Check if the user already has a cart
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      // If no cart exists, create a new cart
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (existingItemIndex !== -1) {
      // Update the quantity of the existing item
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add a new item to the cart
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    return res.status(200).json({
      msg: "Product added to the cart successfully.",
      cart
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res.status(500).json({
      msg: "An error occurred while adding the product to the cart."
    });
  }
};

// Get the current user's shopping cart
export const getCartItems = async (req, res) => {
  const { userId } = req.user; // Assuming you get the userId from authentication (e.g., JWT token)

  try {
    const cart = await Cart.findOne({ userId }).populate('items.product'); // Populate product details in the cart items
    if (!cart) {
      return res.status(404).json({
        msg: "Cart is empty or not found."
      });
    }

    return res.status(200).json({
      msg: "Cart items fetched successfully.",
      cart
    });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return res.status(500).json({
      msg: "An error occurred while fetching cart items."
    });
  }
};

// Update the quantity of a product in the cart
export const updateCartItemQuantity = async (req, res) => {
  const { userId } = req.user; // Assuming you get the userId from authentication (e.g., JWT token)
  const { productId, quantity } = req.body; // productId and quantity in request body

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        msg: "Cart not found."
      });
    }

    // Find the item in the cart
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex === -1) {
      return res.status(404).json({
        msg: "Product not found in the cart."
      });
    }

    // Update the quantity
    cart.items[itemIndex].quantity = quantity;
    await cart.save();

    return res.status(200).json({
      msg: "Cart item quantity updated successfully.",
      cart
    });
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    return res.status(500).json({
      msg: "An error occurred while updating the cart item quantity."
    });
  }
};

// Remove an item from the cart
export const removeItemFromCart = async (req, res) => {
  const { userId } = req.user; // Assuming you get the userId from authentication (e.g., JWT token)
  const { productId } = req.params; // Get productId from route params

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        msg: "Cart not found."
      });
    }

    // Find the index of the item to remove
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex === -1) {
      return res.status(404).json({
        msg: "Product not found in the cart."
      });
    }

    // Remove the item from the cart
    cart.items.splice(itemIndex, 1);
    await cart.save();

    return res.status(200).json({
      msg: "Product removed from the cart successfully.",
      cart
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return res.status(500).json({
      msg: "An error occurred while removing the product from the cart."
    });
  }
};

// Clear the entire cart
export const clearCart = async (req, res) => {
  const { userId } = req.user; // Assuming you get the userId from authentication (e.g., JWT token)

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        msg: "Cart not found."
      });
    }

    // Clear all items in the cart
    cart.items = [];
    await cart.save();

    return res.status(200).json({
      msg: "Cart cleared successfully."
    });
  } catch (error) {
    console.error("Error clearing cart:", error);
    return res.status(500).json({
      msg: "An error occurred while clearing the cart."
    });
  }
};
