import { from, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';



describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init debe cargar los medicos', () => {

        // hace peticiones falsas al servicio
        spyOn( servicio, 'getMedicos').and.callFake( ()=>{
            return from( [ ['medico1', 'medico2', 'medico3'] ] );
        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);

    });

    // solo prueba la llamada a la funcion
    it('Debe llamar al servidor para agregar un medico', () =>{

        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico => {
            return EMPTY;
        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
        // para saber si el metodo fue llamado
    });

    // solo prueba que responda la funcion
    it('Debe agregar un nuev medico al arreglo de medicos', () =>{

        const medico = { id: 1, nombre: 'Pedro PErez'};

        spyOn( servicio, 'agregarMedico')
                    .and.returnValue( from( [medico]) );

        componente.agregarMedico();

        expect( componente.medicos.length ).toBe(1);
        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    })

    // solo prueba el error de la funcion
    it('Si falla en la adicion, la propiedad msjError debe ser igual al error del servico', ()=>{

        const myError = "No se pudo agregar el medico";

        spyOn(servicio, 'agregarMedico').and
            .returnValue( throwError( myError ));

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe(myError);

    });

    // Prueba el metodo de borrar medico
    it('Debe llamar al servidor para borrar un medico', ()=>{

        // haremos otro spia para simular el click en aceptar del confirm
        spyOn( window , 'confirm').and.returnValue(true);


        const espia = spyOn(servicio, 'borrarMedico').and.callFake( medico => {
            return EMPTY;
        });

        componente.borrarMedico('2');

        expect(espia).toHaveBeenCalledWith('2');
        // si el metodo es llamado con un argumento
    });

    // Prueba el metodo de borrar medico negando que se quiere borrar
    it('NO Debe llamar al servidor para borrar un medico', ()=>{

        // haremos otro spia para simular el click en aceptar del confirm
        spyOn( window , 'confirm').and.returnValue(false);


        const espia = spyOn(servicio, 'borrarMedico').and.callFake( medico => {
            return EMPTY;
        });

        componente.borrarMedico('2');

        expect(espia).not.toHaveBeenCalledWith('2');
        // si el metodo es llamado con un argumento
    });

});
