import { FormularioLogin } from "./formulario";
import { FormBuilder } from '@angular/forms';


describe('Pruebas de formulario', () =>{

    let component: FormularioLogin;

    beforeEach( ()=> {

        component = new FormularioLogin( new FormBuilder() );

    });

    it(' Debe crear un formulario con 2 campos email y password', () =>{
        expect( component.form.contains('email')).toBeTruthy();
        expect( component.form.contains('password')).toBeTruthy();
    });

    it('El email debe ser Obligatorio', ()=> {
        const control = component.form.get('email');

        control.setValue('');

        expect( control.valid ).toBeFalsy();
    });

    it('El email debe ser un correo valido', ()=> {
        const control = component.form.get('email');

        control.setValue('dm@gmail.com');

        expect( control.valid ).toBeTruthy();
    });
});