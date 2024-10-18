import { HttpClient } from '@angular/common/http';
import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
  AfterViewInit,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { baseUrl } from '../../utils/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChildren('inputElement') inputElements:
    | QueryList<ElementRef>
    | undefined;

  constructor(private renderer: Renderer2, private cookie: CookieService) {}

  ngAfterViewInit() {
    if (this.inputElements) {
      this.inputElements.toArray().forEach((input) => {
        this.renderer.listen(
          input.nativeElement,
          'focus',
          this.addClass.bind(this)
        );
        this.renderer.listen(
          input.nativeElement,
          'blur',
          this.removeClass.bind(this)
        );
      });
    }
  }

  // Update: Cast parentNode to Element type to access classList
  addClass(event: FocusEvent): void {
    const parent = (event.target as HTMLElement).parentNode
      ?.parentNode as Element;
    if (parent) {
      parent.classList.add('focus');
    }
  }

  // event for placeholder input
  removeClass(event: FocusEvent): void {
    const parent = (event.target as HTMLElement).parentNode
      ?.parentNode as Element;
    if (parent && (event.target as HTMLInputElement).value === '') {
      parent.classList.remove('focus');
    }
  }

  loginObj: any = {
    email: '',
    password: '',
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLoginBtn() {
    this.http
      .post( baseUrl + 'login/super-admin',
        this.loginObj
      )
      .subscribe((res: any) => {
        console.log(res);
        if (res.token) {
          alert('Login Successful');
          this.router.navigateByUrl('/Admin/dashboard'); 
          // Store the token in sessionStorage
          sessionStorage.setItem('adminToken', res.token); 
          // Set a timeout to remove the token after 1 minute
          setTimeout(() => {
            this.router.navigateByUrl('/login'); // Optionally redirect to login
            sessionStorage.removeItem('adminToken');
            // alert('Session expired. Please log in again.');
          }, 300000); 
        } else {
          alert('Wrong Password');
        }
      });
  }
  
}
