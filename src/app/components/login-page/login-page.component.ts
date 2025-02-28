import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule here
})
export class LoginComponent {
  userId: string = '';
  userPassword: string = '';
  message: string = '';
  messageType: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const apiUrl = 'http://127.0.0.1:5000/authenticate';
    const payload = {
      ID: this.userId,
      Password: this.userPassword
    };

    this.http.post(apiUrl, payload).subscribe(
      (response: any) => {
        this.showMessage(response.message, 'success');
      },
      (error) => {
        this.showMessage(error.error.message || 'Login failed', 'error');
      }
    );
  }

  onReset(): void {
    this.userId = '';
    this.userPassword = '';
  }

  private showMessage(msg: string, type: string): void {
    this.message = msg;
    this.messageType = type;

    // Auto-hide pop-up after 3 seconds
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
}
