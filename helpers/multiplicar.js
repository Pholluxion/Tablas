const fs = require("fs");
// var colors = require('colors');
const colors = require("colors/safe");

const crearTabla = async (base, limite, listar) => {
  try {
    let salida = `*------------------------*\n|    \t${colors.green(
      `Tabla de ${colors.red(`${base}`)}`
    )}   \t |\n*------------------------*\n`;

    let salida2 = `*------------------------*\n|    \tTabla de ${base}   \t |\n*------------------------*\n`;

    for (let index = 0; index <= limite; index++) {
      salida += `|      ${colors.red(`${base}`)} x ${colors.magenta(
        `${index}`
      )} = ${colors.yellow(`${base * index}`)}    \t |\n`;
      salida2 += `|   ${base} x ${index} = ${base * index}      \t |\n`;
    }
    salida += "*------------------------*\n";
    salida2 += "*------------------------*\n";
    if (listar) {
      console.clear();
      console.log(colors.blue(salida));
    }

    fs.writeFileSync(`./out/tabla-${base}.txt`, salida2);

    return colors.green(`tabla-${base}.txt creada`);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  crearTabla,
};
