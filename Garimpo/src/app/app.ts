import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private script?: HTMLScriptElement;

  ngAfterViewInit(): void {
    this.script = this.document.createElement('script');
    this.script.src = 'garimpo-engine.js';
    this.script.dataset['garimpoEngine'] = 'true';
    this.document.body.appendChild(this.script);
  }

  ngOnDestroy(): void {
    this.script?.remove();
  }
}
