import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// @desc    Get the cart for the current user
// @route   GET /api/cart
// @access  Protected
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );
    if (!cart) {
      return res.status(200).json({ items: [], totalPrice: 0 });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

// @desc    Add an item to the cart
// @route   POST /api/cart/add
// @access  Protected
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [], totalPrice: 0 });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.quantity * product.price,
      0
    );

    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(400).json({ message: "Error adding item to cart", error });
  }
};

// @desc    Update the quantity of a cart item
// @route   PUT /api/cart/update/:itemId
// @access  Protected
export const updateCartItem = async (req, res) => {
  const { quantity } = req.body;

  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.id(req.params.itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );

    const updatedCart = await cart.save();
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json({ message: "Error updating cart item", error });
  }
};

// @desc    Remove an item from the cart
// @route   DELETE /api/cart/remove/:itemId
// @access  Protected
export const removeCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.id(req.params.itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.remove();
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );

    const updatedCart = await cart.save();
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json({ message: "Error removing cart item", error });
  }
};

// @desc    Clear the cart
// @route   DELETE /api/cart/clear
// @access  Protected
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = [];
    cart.totalPrice = 0;

    const clearedCart = await cart.save();
    res.status(200).json(clearedCart);
  } catch (error) {
    res.status(400).json({ message: "Error clearing cart", error });
  }
};
