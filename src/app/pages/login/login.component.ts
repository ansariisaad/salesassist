import { Component, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements AfterViewInit {

  @ViewChildren('inputElement') inputElements: QueryList<ElementRef> | undefined;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.inputElements) {
      this.inputElements.toArray().forEach(input => {
        this.renderer.listen(input.nativeElement, 'focus', this.addClass.bind(this));
        this.renderer.listen(input.nativeElement, 'blur', this.removeClass.bind(this));
      });
    }
  }

  // Update: Cast parentNode to Element type to access classList
  addClass(event: FocusEvent): void {
    const parent = (event.target as HTMLElement).parentNode?.parentNode as Element;
    if (parent) {
      parent.classList.add('focus');
    }
  }

  // event for placeholder input
  removeClass(event: FocusEvent): void {
    const parent = (event.target as HTMLElement).parentNode?.parentNode as Element;
    if (parent && (event.target as HTMLInputElement).value === '') {
      parent.classList.remove('focus');
    }
  }

  loginObj: any = {
    userName: '',
    password: ''
  };

  router = inject(Router);

  onLogin() {
    if (this.loginObj.userName === 'admin' && this.loginObj.password === '1111') {
      this.router.navigateByUrl('/Admin/dashboard');
    } else {
      alert('wrong credentials');
    }
  }
}
