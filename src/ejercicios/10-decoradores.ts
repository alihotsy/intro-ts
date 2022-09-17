
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
      hello = 'Marco Polo';
    };
  }

  @classDecorator
  class MiSuperClase {
      public miPropiedad:string = 'ABC123';

      imprimir(){ 
          console.log('Hola mundo');
      }
  }
  const miClase = new MiSuperClase();

  console.log(miClase.miPropiedad)