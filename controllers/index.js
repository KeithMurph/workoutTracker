const express = require("express");
const router = express.Router();
const workoutRoutes = require("./apiRoutes");
const homeRoutes = require("./frontEndRoutes");

router.use("/api", workoutRoutes);
router.use("/", homeRoutes);

module.exports = router;