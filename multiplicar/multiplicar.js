// requireds
const fs = require('fs');
const colors = require('colors');

let colores = ['pink', 'red', 'blue', 'purple'];

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor: ${base} o ${limite}, no es un número`);
        }

        console.log('======================='.green);
        console.log(`===tabla de ${base}, ${colores[base]}====`.green);
        console.log('======================='.green);

        let tabla = '';
        let currentColor = colores[base];
        console.log(currentColor);


        for (let i = 0; i < limite; i++) {
            tabla += `${base} x ${i} = ${base * i}\n`;
            console.log(colors.red(tabla));

        }


    });


};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor: ${base}, no es un número`);
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}