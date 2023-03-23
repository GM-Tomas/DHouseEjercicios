const bicicletas = require("./datosBici.js");

const dhBici = {
  bicicletas: bicicletas,
  buscarBici: function (id) {
    const result = bicicletas.filter(function (bici) {
      return bici.id === id;
    });
    return result.length ? result[0] : null;
  },
  venderBici: function (id) {
    let bici = this.buscarBici(id);
    return bici ? ((bici.vendida = "si"), bici) : "Bicicleta no encontrada";
  },
  biciParaLaVenta: function () {
    return bicicletas.filter(function (bici) {
      return bici.vendida === "no";
    });
  },
  totalDeVentas: function () {
    return bicicletas.reduce(
      (acum, current) => (acum + (current.vendida === "si" ? current.precio : 0)),
      0
    );
  },
};

dhBici.venderBici(1);
//console.log(dhBici.buscarBici(1));
//console.log(dhBici.biciParaLaVenta());
//let result = dhBici.totalDeVentas();
//console.log(dhBici);
//console.log(dhBici);
