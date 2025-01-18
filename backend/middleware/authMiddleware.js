const authMiddleware = (req, res, next) => {
    if (!req.session || !req.session.user) {
      console.log('Unauthorized access attempt. Redirecting to login...');
      return res.status(401).json({ redirect: '/home/login', error: 'Please log in to access this page' });
    }
    next();
  };
  
  module.exports = authMiddleware;
  