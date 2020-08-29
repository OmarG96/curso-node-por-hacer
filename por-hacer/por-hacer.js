const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile(`db/data.json`, data, (err) => {
    if (err) throw new Error("No se pudo grabar");
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = (descripcion) => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(porHacer);
  guardarDB();

  return porHacer;
};

const getListado = () => {
  cargarDB();

  return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();

  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );

  if (index !== -1) {
    listadoPorHacer[index].completado = completado;
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();

  let borrado = false;
  listadoPorHacer = listadoPorHacer.filter((tarea) => {
    if (tarea.descripcion !== descripcion) {
      return true;
    } else {
      borrado = true;
      return false;
    }
  });

  if (borrado) {
    guardarDB();
  }
  return borrado;
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};
