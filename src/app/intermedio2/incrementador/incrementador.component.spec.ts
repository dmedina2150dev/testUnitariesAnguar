import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });


    // pruebas en el html
    it('Debe mostrar la leyenda', () => {

        component.leyenda = "PRogreso de Carga";

        fixture.detectChanges(); // dispara la deteccion de cambios

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect(elem.innerHTML).toContain("PRogreso de Carga");

    });

    it('Comprobar que se actualice el input en el  html', () => {

        component.cambiarValor(5);
        fixture.detectChanges();

        // si por alguna razon no detecta los cambios a tiempo
        fixture.whenStable().then( ()=>{

            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;
            expect( elem.value ).toBe('55');

        });
    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton', ()=>{

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary'));

        // tomamos el primer boton y disparamos el click
        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);

    });

    it('Debe pulsar el boton y comprobar que el progreso cambio en el html', ()=>{

        const btnDecrement = fixture.debugElement.query( By.css('.btn-primary'));

        btnDecrement.triggerEventHandler('click', null);
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        fixture.detectChanges();

        fixture.whenStable().then( ()=>{
            expect(component.progreso).toBe(45);
            expect(elem.innerHTML).toContain('45');
        });

    });

});
