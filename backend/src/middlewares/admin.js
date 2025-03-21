const isAdmin = (req, res, next) => {
  // Assuming that the user's role is available in req.user (after authentication)
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Permission denied. Admins only.' });
  }
  next(); // User is an admin, continue with the next middleware or route handler
};

export default isAdmin;
