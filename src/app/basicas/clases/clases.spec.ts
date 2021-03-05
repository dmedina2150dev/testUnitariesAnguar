import { Jugador } from "./clases";

describe('Pruebas de clases', () =>{

    let jugador = new  Jugador();

    // beforeAll();// Antes de que se ejecuten todas las pruebas, se ejecuta una vez antes de todo
    beforeAll( () =>{
        console.log('beforeAll');

    });
    // beforeEach(); // Se ejecuta Antes de cada prueba, (es decir el ciclo IT)
    beforeEach( () =>{
        console.log('beforeEach');
        // jugador.hp = 100;
        jugador = new  Jugador();
    });

    // afterAll(); // Despues de que se ejecuten todas las pruebas, se ejecuta una vez antes de todo
    afterAll( () =>{
        console.log('afterAll');
    });
    // afterEach();// Se ejecuta cada vez que termina una prueba ( es decir un ciclo IT)
    afterEach( () => {
        console.log('afterEach');
        //jugador.hp = 100;
    });


    it('Debe Retornar 80 de hp, si recibe 20 de daño', () => {

        // const jugador = new  Jugador();

        const resp = jugador.recibeDanio(20);

        expect( resp ).toBe(80);
    });

    it('Debe Retornar 50 de hp, si recibe 50 de daño', () => {

        // const jugador = new  Jugador();

        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50);
    });

    it('Debe Retornar 0 de hp, si recibe 100 de daño', () => {

        // const jugador = new  Jugador();

        const resp = jugador.recibeDanio(100);

        expect( resp ).toBe( 0);
    });
});