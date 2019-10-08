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
    const iconUrl = `${IconComponent.ICONS_ROOT}/${this.name}.svg`;

    try {
      const res = await fetch(iconUrl, { cache: 'force-cache' });
      if (res.status !== 200) {
        throw new Error(
          `Error code ${res.status}, failed to load icon: ${iconUrl}. Check your 'name' attribute.`
        );
      }
      return res.text();
    } catch (err) {
      console.error(err);
    }
  }

  getClasses(): string {
    return `${this.size} ${this.light ? 'light' : ''}`;
  }
}
