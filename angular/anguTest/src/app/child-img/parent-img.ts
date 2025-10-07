import { Component, signal } from '@angular/core';
import { ChildImg } from './child-img';

@Component({
  selector: 'app-parent-img',
  imports: [ChildImg],
  templateUrl: './parent-img.html',
  styleUrl: './parent-img.css'
})
export class ParentImg {
  title = signal('Titre transmis par ParentImg');
}