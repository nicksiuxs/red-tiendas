let Store = require("../models/Store.js");

//Exporta la lista de tiendas y renderiza la vista
exports.Store_list = function (req, res) {
  res.render("stores/index", { stores: Store.allStores });
};
