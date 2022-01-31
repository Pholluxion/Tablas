const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: 'Base de la tabla'
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base debe ser de tipo numerico";
    }

    return true;
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    // demandOption: true,
    default:10,
    description: 'Limite de la tabla'
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "El limite debe ser de tipo numerico";
    }

    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description:'Muestra la tabla en consola'
  }).argv;

module.exports = argv;
