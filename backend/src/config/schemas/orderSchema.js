import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',  // Refers to the Product model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,  // Minimum quantity of 1
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,  // Total price for this item
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  // Refers to the User model
      required: true,
    },
    items: [orderItemSchema],  // List of products in the order
    shippingAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',  // Initial status when the order is placed
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,  // Default price is 0
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending',  // Default payment status
    },
    paymentMethod: {
      type: String,
      enum: ['Credit Card', 'Debit Card', 'Paypal', 'Cash On Delivery'],
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now,  // Automatically set the order date to current date/time
    },
    trackingNumber: {
      type: String,
      default: '',  // Can be filled when the product is shipped
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
