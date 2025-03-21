import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',  
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,  
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  // This links the cart to a specific user
      required: true,
    },
    items: [cartItemSchema],  // Array to hold items in the cart
    totalPrice: {
      type: Number,
      required: true,
      default: 0,  // Default is 0, as the cart is empty initially
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
