import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shell-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent { }
