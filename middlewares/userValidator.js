const { check, validationResult } = require("express-validator");


exports.validateUser = [
  check("firstName").trim().notEmpty().withMessage("Enter First Name"),
  check("lastName").trim().notEmpty().withMessage("Enter Last Name"),
  check("email")
    .isEmail()
    .withMessage("Invalid Email")
    .notEmpty()
    .withMessage("Enter Email"),
  check("password")
    .notEmpty()
    .withMessage("Enter Password")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/,
      "i"
    )
    .withMessage(
      "Password must contain uppercase, lowercase, numbers and symbols"
    )
    .isLength({ min: 8 })
    .withMessage("Paswword must be up to eight"),
  
  check("password2").custom(async (password2, { req }) => {
    const password = req.body.password;
    if (password !== password2) {
      throw new Error("Password doesnt not match");
    }

    return true
  }), check('agree').custom(async (agree, {req}) => {
      if(!agree) {
        throw new Error('You have to agree to our terms and conditions')
      }
  }),
  (req, res, next) => {
    let errors = validationResult(req);
    console.log(errors.array().map((one) => one.msg));
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .render("public/register", { errors: errors.array() });
    }

    next();
  },
];
