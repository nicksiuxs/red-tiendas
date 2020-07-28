let express = require("express");
let router = express.Router();
let storeController = require("../controller/StoreController.js");

//Lista
router.get("/", storeController.Store_list);

module.exports = router;