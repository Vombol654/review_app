exports.userController = (req, res) => {
  res.send("<h1>Hello from backend</h1>");
};

exports.createUserController = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Successfuly created the user",
    data: req.body,
  });
};
