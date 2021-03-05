
import { incrementar } from './numbers';

describe('Pruebas para numeros', ()=>{

    it('Debe retornar 100 si el numero ingresado es igual a 100', ()=>{

        const res = incrementar(300);
        expect(res).toBe(100);
    });

    it('Debe retornar el numero ingresado +1', ()=>{

        const num= 50;
        const res = incrementar(num);
        expect(res).toBe(num+1);
    });
});