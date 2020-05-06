import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagepipePipe implements PipeTransform {
  noImageRoute = 'assets/img/noimage.png';

  transform(images: any[]): string {
    if (!images) {
      return this.noImageRoute;
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return this.noImageRoute;
    }
    return null;
  }
}
