import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDesignComponent } from "./components/input-design/input-design.component";
import { HttpClientModule } from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputDesignComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cofifront';
}
