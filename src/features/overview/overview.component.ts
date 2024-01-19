import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SELL } from '../../utils/interfaces';
import { Ventes } from '../../utils/data';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  public mainChartElements: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public months:string[] = ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUI', 'JUL', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC'];
  public mobileSells: number = 0; 
  public fixeSells: number = 0;
  public yesterSellsLength: number = 0;

  constructor() {
    this.mainChartElements = this.getPercentages2023(Ventes);
    this.yesterSellsLength = this.getYesterdaySellsLength(Ventes)
  }

  getPercentages2023(ventes: SELL[]): number[] {
    const ventes2023 = ventes.filter(vente => vente.date_de_commande.startsWith('2023'));
    const ventesMensuelles: number[] = Array(12).fill(0);
    ventes2023.forEach(vente => {
        const mois = new Date(vente.date_de_commande).getMonth();
        ventesMensuelles[mois] += 1;
        vente.type_vente == 'MOBILE' ? this.mobileSells++ : this.fixeSells++;
    });
    const moisLePlusPerformant = ventesMensuelles.indexOf(Math.max(...ventesMensuelles));
    const pourcentages: number[] = ventesMensuelles.map(ventesMois => {
        return (ventesMois / ventesMensuelles[moisLePlusPerformant]) * 100;
    });

    return pourcentages;
  }


  getYesterdaySellsLength(ventes: SELL[]): number {
    const aujourdHui = new Date();
    const hier = new Date(aujourdHui);
    hier.setDate(aujourdHui.getDate() - 1);
    const hierFormatte = hier.toISOString().split('T')[0];
    const ventesHier = ventes.filter(vente => vente.date_de_commande.startsWith(hierFormatte));
    return ventesHier.length;
  }
}
