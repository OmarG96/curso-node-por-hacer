const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la tarea por hacer",
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completado o pendiente la tarea",
};

const { argv } = require("yargs")
  .command("crear", "Crear un elemento por hacer", {
    descripcion,
  })
  .command("actualizar", "Actualiza un por hacer", {
    descripcion,
    completado,
  })
  .command("borrar", "Borra un por hacer", {
    descripcion,
  })
  .help();

module.exports = {
  argv,
};
