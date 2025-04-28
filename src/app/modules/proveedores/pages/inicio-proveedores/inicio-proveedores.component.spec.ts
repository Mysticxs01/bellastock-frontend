import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProveedoresComponent } from './inicio-proveedores.component';

describe('InicioProveedoresComponent', () => {
  let component: InicioProveedoresComponent;
  let fixture: ComponentFixture<InicioProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioProveedoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
