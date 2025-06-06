import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Consultant } from '../../../profiles/models/consultant.entity';

@Component({
  selector: 'app-consultant-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './consultant-card.component.html',
  styleUrl: './consultant-card.component.css'
})
export class ConsultantCardComponent {
  @Input() consultant!: Consultant;
}
