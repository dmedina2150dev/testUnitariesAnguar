import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';



class FalsoRouter {
	navigate( params ) {}
}

class FalsoActivateRoute {
	//params: Observable<any> = EMPTY;

	// para manipular los valores de un observable
	// este nos permite porder insertar valores a los observables
	private Subject = new Subject();

	push( valor ){
		this.Subject.next( valor );
	}

	get params(){
		return this.Subject.asObservable();
	}


}

describe('RouterMedicoComponent', () => {
	let component: RouterMedicoComponent;
	let fixture: ComponentFixture<RouterMedicoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RouterMedicoComponent],
			imports: [],
			providers: [
				{ provide: Router, useClass: FalsoRouter },
				{ provide: ActivatedRoute, useClass: FalsoActivateRoute }
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RouterMedicoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});


	it('Debe redireccionar a Médico cuando se guarde', () => {

		const router = TestBed.get(Router);
		const spy = spyOn( router, 'navigate' );

		component.guardarMedico();

		expect( spy ).toHaveBeenCalledWith(['medico', '123']);

	});

	it('Debe de colocar el id = nuevo', () => {

		component =  fixture.componentInstance;

		const activateRoute: FalsoActivateRoute =  TestBed.get(ActivatedRoute);

		activateRoute.push( { id: 'nuevo' });

		expect( component.id ).toBe('nuevo');



	});
});
