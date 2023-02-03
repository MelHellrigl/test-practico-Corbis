import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(list: any[], text: string): any {
    if (!text) return list;
    return list.filter(
      (res) =>
        res.name.toUpperCase().includes(text.toUpperCase()) ||
        res.description.toUpperCase().includes(text.toUpperCase()) ||
        res.perspective.name.toUpperCase().includes(text.toUpperCase()) ||
        res.code.toUpperCase().includes(text.toUpperCase())
    );
  }
}
