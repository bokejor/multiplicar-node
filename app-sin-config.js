const argv = require('yargs')
    .command('listar', 'Imprimimos la tabla', {

        base: {

            demand: true,
            alias: 'b'
        },
        limite: {

            default: 10,
            alias: 'l'
        }
    })
    .command('crear', 'Creamos la tabla', {

        base: {

            demand: true,
            alias: 'b'
        },
        limite: {

            default: 10,
            alias: 'l'
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, archivo))
            .catch(e => console.log(e));;
        break;

    default:
        console.log('Comando no reconocido');

}



// let argv2 = process.argv;
// console.log(argv2);
// console.log('Limite', argv.limite);

// let parametro = process.argv[2];
// let base = parametro.split('=')[1]



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: `, archivo))
//     .catch(e => console.log(e));