import { Medecin } from '../types/medecin.interface';
import { Doctor } from '../types/doctor.interface';

// Fonction classique (pas fléchée) 
export function convertMedecinToDoctor(medecin: Medecin): Doctor {
  return {
    id: medecin.id,    
    firstName: medecin.nom,
    lastName: medecin.prenom,
    adresse: medecin.adresse,
    email: medecin.email,
    specialite: medecin.specialite
  };
}