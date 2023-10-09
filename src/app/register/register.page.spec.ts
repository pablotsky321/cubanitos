import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => { // Asegúrate de que esta función esté marcada como async
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      // ...otros ajustes de configuración
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
