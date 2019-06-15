import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[imagePreload]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src',
  },
})
export class ImagePreloadDirective implements OnInit {
  isUpdated = false;

  @Input() src: String;

  ngOnInit() {
    const endOfString = this.src.slice(-1);
    if (endOfString === '.') {
      this.src += 'jpg';
    }
  }

  updateUrl() {
    if (this.isUpdated) {
      return;
    }

    if (this.src.includes('.png')) {
      this.src = this.src.replace('.png', '.jpg');
    } else if (this.src.includes('.jpg')) {
      this.src = this.src.replace('.jpg', '.png');
    }

    this.isUpdated = true;
  }
}