import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login-page.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty userId and userPassword initially', () => {
    expect(component.userId).toBe('');
    expect(component.userPassword).toBe('');
  });

  it('should update userId and userPassword on input', () => {
    const userIdInput: HTMLInputElement = fixture.nativeElement.querySelector('#userId');
    const userPasswordInput: HTMLInputElement = fixture.nativeElement.querySelector('#userPassword');

    userIdInput.value = 'testUser';
    userIdInput.dispatchEvent(new Event('input'));
    userPasswordInput.value = 'testPassword';
    userPasswordInput.dispatchEvent(new Event('input'));

    expect(component.userId).toBe('testUser');
    expect(component.userPassword).toBe('testPassword');
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should reset userId and userPassword when reset button is clicked', () => {
    component.userId = 'testUser';
    component.userPassword = 'testPassword';
    const resetButton: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-reset');
    resetButton.click();
    expect(component.userId).toBe('');
    expect(component.userPassword).toBe('');
  });
});