import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child-img',  
  standalone: true,  
  template: `<p>Titre reçu : {{ title() }}</p>`
})
export class ChildImg {
  // valeur optionnelle avec défaut :  
  title = input<string>('Titre par défaut');  
  // ou, input requis (aucune valeur par défaut) :  
  //title = input.required<string>();
}