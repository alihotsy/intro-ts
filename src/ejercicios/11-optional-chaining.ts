

interface Pasajero {
    nombre:string;
    hijos?:string[]
}

const pasajero1: Pasajero = {
    nombre: 'Terry'

}
const pasajero2: Pasajero = {
    nombre: 'Nathan',
    hijos: ['Lola','Corey']

}

const imprimeHijos = (pasajero:Pasajero):void => {
      const cuantosHijos = pasajero.hijos?.length || 0;
      console.log(cuantosHijos);
}

imprimeHijos(pasajero1);