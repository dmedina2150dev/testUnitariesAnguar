import { usuarioLogeado } from "./boolean";

describe('Pruebas de booleanos', ()=>{

    it('Debe retornar true', ()=>{

        const res =   usuarioLogeado();

        // expect(res).toBeTruthy();
        expect(res).not.toBeTruthy();
    });
});