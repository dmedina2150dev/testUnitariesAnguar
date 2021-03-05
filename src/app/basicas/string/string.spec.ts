// describe();
// it();

import { mensaje } from "./string";

describe('Pruebas de string', ()=>{

    it('Debe de regresar un string', ()=>{

        const msg = mensaje("Dajan");

        expect( typeof msg ).toBe('string');

    });

    it('Debe de retornar un saludo con el nombre enviado', ()=>{

        const nombre = "Pedo"
        const msg = mensaje(nombre);

        expect(msg).toContain(nombre);

    });
});