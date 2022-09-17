
interface Reproductor {
    volumen:number,
    segundo:number,
    cancion:string,
    detalles: Detalles
}
interface Detalles {
    autor:string;
    year:number;
}

const reproductor: Reproductor = {
   volumen:90,
   segundo:36,
   cancion: 'Mess',
   detalles: {
       autor:'Ed Sheeran',
       year:2015
   }
}
const autor = 'Fulano';
const {volumen, segundo, cancion, detalles:{autor:autorDetalle}} = reproductor;


// console.log('El volumen actual es de: ',volumen);
// console.log('El segundo actual es de: ',segundo)
// console.log('La canción actual es de: ',cancion)
// console.log('El autor actual es de: ',autorDetalle)

const dbz: string[] = ['Goku','Vegeta','Trunks'];

const[,,pj3] = dbz;

// console.log('Personaje 1: ',pj1);
// console.log('Personaje 2: ',pj2);
console.log('Personaje 3: ',pj3);