import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecin-detail.component',
  imports: [],
  templateUrl: './medecin-detail.component.html',
  styleUrl: './medecin-detail.component.css'
})
export class MedecinDetailComponent {
  private route = inject(ActivatedRoute);  // Variante instantanée (snapshot)  
  id = Number(this.route.snapshot.paramMap.get('id'));  
}
