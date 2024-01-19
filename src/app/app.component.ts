import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BTN_ASIDE } from '../utils/interfaces';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public buttons: BTN_ASIDE[] = [
    {
      libelle: 'Aperçu',
      path: '/',
      image: 'assets/images/apercu-gris-menu-icon.png',
      imageActive: 'assets/images/apercu-bleu-menu-icon.png'
    },
    {
      libelle: 'Ventes',
      path: '/sells',
      image: 'assets/images/ventes-gris-menu-icon.png',
      imageActive: 'assets/images/ventes-blue-menu-icon.png'
    },
    {
      libelle: 'Analyses',
      path: '/analytics',
      image: 'assets/images/analyses-gris-menu-icon.png',
      imageActive: 'assets/images/apercu-bleu-menu-icon.png'
    }
  ];
  title = 'test-front-end';

  constructor(private router: Router){}

  public isActiveUrl(value: string): boolean {
    const url = window.location.pathname;
    return url.includes(value) ? true : false;
  }

  public toastComingSoon() {
    Notify.info('Pas encore disponible ! Reessayer ulterieurement.');
  }

  public redirect(path: string){
    if(path == '/analytics') return this.toastComingSoon();
    this.router.navigateByUrl(path);
  }
}
