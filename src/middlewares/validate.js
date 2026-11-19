export const validate = (schema) => {
  return (req, res, next) => {
    const data = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!data.success) {
      return res.status(400).json({
        message: "Validate feil",
        error: data.error.flatten(),
      });
    }
    next();
  };
};

// create user{
// username, email}
