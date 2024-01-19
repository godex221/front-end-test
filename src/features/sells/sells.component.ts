import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { Ventes } from '../../utils/data';
import { SELL } from '../../utils/interfaces';

@Component({
  selector: 'app-sells',
  standalone: true,
  imports: [DatePipe, DxDataGridModule, DxSelectBoxModule ],
  templateUrl: './sells.component.html',
  styleUrl: './sells.component.scss'
})
export class SellsComponent {
  public sells: SELL[] = Ventes;
}
