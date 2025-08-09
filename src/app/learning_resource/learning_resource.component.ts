import { Component } from '@angular/core';
import { SafeLinkDirective } from '../save-link.directive';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning_resource.component.html',
  styleUrl: './learning_resource.component.css',
  standalone: true,
  imports:[SafeLinkDirective,LogDirective]
})
export class LearningResourcesComponent {}