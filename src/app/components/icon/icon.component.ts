import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'neat-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  static readonly ICONS_ROOT = 'assets/icons';
  svgContent$: Observable<SafeHtml>;

  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
  @Input() light = false;

  private _name: string;
  @Input('name')
  set name(value: string) {
    this._name = value;
    this.updateIcon();
  }
  get name() {
    return this._name;
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.updateIcon();
  }

  private updateIcon(): void {
    this.svgContent$ = from(this.fetchIcon()).pipe(
      map(svg => this.sanitizer.bypassSecurityTrustHtml(svg))
    );
  }

  private async fetchIcon(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.name) return;
      const iconUrl = `${IconComponent.ICONS_ROOT}/${this.name}.svg`;

      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', res => {
        if ((res.currentTarget as any).status !== 200) {
          return reject(
            `Error code ${
              (res.currentTarget as any).status
            }, failed to load icon: ${iconUrl}. Check your 'name' attribute.`
          );
        }
        return resolve((res.currentTarget as any).responseText);
      });
      xhr.open('GET', iconUrl);
      xhr.send();
    });
  }

  getClasses(): string {
    return `${this.size} ${this.light ? 'light' : ''}`;
  }
}
