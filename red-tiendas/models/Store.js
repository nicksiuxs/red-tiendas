/*
    Acá se realiza el modelo de la tienda con su constructor
*/
function Store(id, nombre, tipo, ubicacion) {
  this.id = id;
  this.nombre = nombre;
  this.tipo = tipo;
  this.ubicacion = ubicacion;
}

Store.toString = function () {
  return `id: ${this.id} nombre: ${nombre} tipo: ${tipo} ubicación: ${ubicacion}`;
};

Store.allStores = [];

Store.add = (aStore) => {
  Store.allStores.push(aStore);
};

Store.findById = (aStoreId) => {
  let aStore = Sotre.allStores.find((x) => x.id == aStoreId);
  console.log(aStore);
  if (aStore) return aStore;
  else
    throw new Error(`No existe una tienda con el id: ${aStoreId} solicitado`);
};

Store.removeById = (aStoreId) => {
  for (let i = 0; i < allStores.length; i++) {
    if (Store.allStores[i].id == aStoreId) {
      Store.allStores.splice(i, 1);
      break;
    }
  }
};

let a = new Store(1, "Panadería Jhon", "Panadería", ["3.385488", "-76.530049"]);
let b = new Store(1, "El sabor", "Restaurante", ["3.385000", "-76.530219"]);

Store.add(a);
Store.add(b);

module.exports = Store;
