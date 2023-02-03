import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((val: any) => this.searchEmitter.emit(val));
  }

  search = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>();
}
