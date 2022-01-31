// const { argv } = require("process");
const { crearTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

// *** Poco efectivo ****

// const [ , ,arg3 = 'base=5'] = process.argv;
// console.log(arg3);
// const [,base = 5] = arg3.split('=');

// *** Argumentos con process y con yargs

// console.log(process.argv);
// console.log(argv);
// console.log(argv.base);

// const base = 7;

crearTabla(argv.base,argv.hasta, argv.listar)
  .then((nom) => console.log(nom))
  .catch((err) => console.log(err));
