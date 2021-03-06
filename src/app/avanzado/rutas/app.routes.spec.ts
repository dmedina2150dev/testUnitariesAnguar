import { MedicoComponent } from '../../intermedio2/medico/medico.component';
import { RUTAS } from './app.routes';


describe('App Routes', () =>{


    it('Debe existir la ruta medico/:id', ( )=>{

        expect( RUTAS ).toContain({
            path: 'medico/:id',
            component: MedicoComponent
        });
    });
});