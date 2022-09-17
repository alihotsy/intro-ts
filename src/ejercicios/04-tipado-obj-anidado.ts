
interface SuperHeroe {
    nombre: string;
    edad:number,
    direccion: Direccion, 
    mostrarDireccion: () => string
}
interface Direccion {
    ciudad:string,
    pais:string,
    calle:string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad:30,
    direccion:{
        calle:'Main St',
        pais:'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(): string{
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion)