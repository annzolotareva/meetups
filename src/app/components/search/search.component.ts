import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchField: string = '';
  
  @ViewChild('test', { static: true }) input: ElementRef | undefined; 

  newMeetups: Array<IMeetup> = [];

  constructor(private http: HttpClient, public meetupsService: MeetupsService) {
  }


  ngOnInit(): void {
     fromEvent(this.input?.nativeElement, 'input')
     .pipe(
       map(val =>  {
         return this.input?.nativeElement.value;
      }),
       filter((val) => {
         return val.length >= 3;
       }),
       debounceTime(1000),
       distinctUntilChanged()
       )
       .subscribe(console.log);
  }

}




  

  

  // ngOnInit(): void {
  //   this.meetupsService.getElems()
  //   .pipe(
  //     distinctUntilChanged(((p: Array<IMeetup>, q: Array<IMeetup>) => p === q)),
  //   )
  //   .subscribe((arg: any) => {
  //     console.log(arg);
  //       this.nMeetups = arg;
  // });
  