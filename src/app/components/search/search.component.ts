import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchField: string = '';
  
  @ViewChild('test', { static: true }) input: ElementRef | undefined; 


  title = 'RxjsOperatorChains';
  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
     fromEvent(this.input?.nativeElement, 'input')
     .pipe(
       map(val =>  {
         return this.input?.nativeElement.value;
      }),
       filter((val) => {
         return val.length >= 2;
       }),
       debounceTime(1000),
       distinctUntilChanged()
       )
       .subscribe(console.log);
  }

}
