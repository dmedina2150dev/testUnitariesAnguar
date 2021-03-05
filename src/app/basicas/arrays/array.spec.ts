import { obtenerRobosts } from './array';
// esa x es para evitar que se ejecuten esas pruebas
xdescribe('Pruebas de arrays', ()=>{

    it('Debe retornar al menos 3 robot', () => {
        const res = obtenerRobosts();

        // asi queda muy delicado si se agrega otro robot a futuro
        // expect( res.length ).toBe(3);
        // por eso de esta forma
        expect( res.length ).toBeGreaterThanOrEqual(3);
    });

    it('Debe contener MegaMan y Ultrom', () => {

        const res = obtenerRobosts();

        expect( res ).toContain('MegaMan');
        expect( res ).toContain('Ultrom');

    });
});