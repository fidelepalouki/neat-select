import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'neat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formGroup: FormGroup = this.fb.group({
    typeDefautRevetement: ['']
  });

  constructor(private fb: FormBuilder) {}

  typeDefautRevetement = '';
  typeDefautRevetementOptions = [
    'Indication non confirmée',
    'Corrosion',
    'Corrosion non-définie',
    'Coup de foudre',
    "Fissuration assistée par l'environnement",
    'Corrosion sous écran',
    'Corrosion par courants alternatifs',
    'Corrosion bactérienne',
    'Corrosion par courants vagabonds',
    'Défaut de fabrication',
    'Repli métal',
    'Empreinte',
    'Incrustation',
    'Inclusion dans la taule',
    "Meulage d'usine",
    'Délaminage',
    "Coup d'arc",
    'Coup de meule',
    'Griffure',
    'Défaut combiné',
    'Enfoncement',
    'Ovalisation',
    'Ecrasement',
    'Ride de cintrage',
    'Effet de toit',
    'Défaut de SC',
    ' Défaut de SH',
    ' Défaut de SL',
    'Plaque Soudé (PP)',
    'Défaut déjà traité',
    'N.A'
  ];
}
