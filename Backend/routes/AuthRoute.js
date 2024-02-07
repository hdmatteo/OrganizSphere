const { Router } = require("express");
const { signup, login, google } = require("../controllers/AuthController");

const router = Router();

router.post("/signup",signup) 
router.post("/login",login)
router.post("/googleauth",google)

module.exports = router;