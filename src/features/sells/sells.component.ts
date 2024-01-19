import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sells',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './sells.component.html',
  styleUrl: './sells.component.scss'
})
export class SellsComponent {

}
