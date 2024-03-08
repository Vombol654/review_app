const User = require("./../model/user.model");
exports.userController = (req, res) => {
  res.send("<h1>Hello from backend</h1>");
};

exports.createUserController = async (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  const oldUser = await User.findOne({ email });
  if (oldUser)
    return res.status(401).json({ error: "This email is already in use" });
  const newUser = await User.create({ name, email, password });
  // var transport = nodemailer.createTransport({
  //   host: "sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "e0cc1101d4cd33",
  //     pass: "71a522cbc894f9",
  //   },
  // });
  res.status(201).json({
    message: "Successfuly created the user",
    data: newUser,
  });
};
