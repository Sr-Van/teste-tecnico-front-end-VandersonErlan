import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDriveComponent } from './cart-drive.component';

describe('CartDriveComponent', () => {
  let component: CartDriveComponent;
  let fixture: ComponentFixture<CartDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
