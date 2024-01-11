import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormularoComponent } from './usuario-formularo.component';

describe('UsuarioFormularoComponent', () => {
  let component: UsuarioFormularoComponent;
  let fixture: ComponentFixture<UsuarioFormularoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioFormularoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFormularoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
