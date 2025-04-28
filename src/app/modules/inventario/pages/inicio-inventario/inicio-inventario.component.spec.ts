import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInventarioComponent } from './inicio-inventario.component';

describe('InicioInventarioComponent', () => {
  let component: InicioInventarioComponent;
  let fixture: ComponentFixture<InicioInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioInventarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
