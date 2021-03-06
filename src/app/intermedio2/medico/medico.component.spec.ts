// importante esto para las pruebas de integracion
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { MedicoComponent } from "./medico.component";
import { MedicoService } from './medico.service';

// esta es la confguracion basica
describe('Medico Component', ()=>{
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>

    beforeEach( () =>{
        // se configura en el before
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ],
            imports: [ HttpClientModule ]
        });

        // crea una instancia y podemos usar todo lo que viene del componente
        fixture =  TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;
    });

    // Prueba de crear el componente
    it('Debe de crearse el componente', ()=>{
        expect( component ).toBeTruthy(true);
    });

    // prueba acceder a los metodos del componente
    it('Debe retornar el saludo al medico', ()=>{
        const nombre = "vefy";

        const msj = component.saludarMedico( nombre );

        expect( msj ).toContain( nombre );

    });


});