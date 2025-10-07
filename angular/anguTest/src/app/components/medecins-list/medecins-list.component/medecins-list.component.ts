import { Component } from '@angular/core';
import { Doctor } from '../../../types/Doctor';
import { DOCTORS } from '../../../constants/doctors.constant';

@Component({
  selector: 'app-medecins-list.component',
  imports: [],
  templateUrl: './medecins-list.component.html',
  styleUrl: './medecins-list.component.css'
})
export class MedecinsListComponent {
  doctors: Doctor[] = DOCTORS;
}
