export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Hongtube";
  res.locals.loggedIn = req.session.user;
  next();
};
