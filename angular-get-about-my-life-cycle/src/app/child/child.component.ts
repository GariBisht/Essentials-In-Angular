  //Comented By Garima Bisht 
  //Component and Directive Lifecycle Hooks 
  //  components have lifecycle hooks some common => ngOnInit , ngOnChanges , ngDoCheck etc
  
import {
  AfterContentChecked,
  AfterContentInit, //only component 
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,  // called just before the component is removed from the dom 
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  //we use OnInit for doing initialization 

  //for Ondestroy we use counter for this we have to set interval 
  counter = 0;
  interval: any;
  // @Input()
  // channelName = "";

  @Input()
  firstName = '';

//Content Reference Variable using ContentChild
  @ContentChild('parentContent', {static: true}) parentContent: any;
  
  //feature access the child content only after the view is initialized 
  //angular 9 second parameter introduce static when static false we cant access both parent and child content 
  @ViewChild('childContent', {static: true}) childContent: any;

  //constructor is not a lifecycle hook
  constructor() {
    console.log(' I am Child Constructor');
  }


  ngOnInit(): void {
    console.log('Child OnInit - component is initialized');
    console.log('init - ' + this.parentContent);
    console.log('init - ' + this.childContent);

    //we use this for Ondestroy , component destroy but interval is still running in console memory leave we have to 
    // use clearInterval by this when we click on toggle button we also destroy interval 
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }
// IMPLEMENTING OnDestroy interface
  ngOnDestroy() {
    // clearInterval(this.interval);
    console.log('Child OnDestroy - component is destroyed');
  }
// its come from outside of component through input 
//ngOnChanges accepts a simplechanges object so we can use current value and previous value // any particular input value changes  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child Onchanges');
    console.log('onChanges - ' + this.parentContent);
    console.log('onChanges - ' + this.childContent);
  }
// it will invoked when the change detector of the given component is invoked its called immediately after ngOnChanges
// we should avoid using both together in same component because its become infinite loop 
  ngDoCheck() {
    console.log('Child DoCheck');
    //after content init 
    console.log('doCheck - ' + this.parentContent);
    console.log('doCheck - ' + this.childContent);
  }

  //component only life cycle hook  
  // called only once after the first do check 
  ngAfterContentInit() {
    console.log('Child After Content Init');
    console.log('AfterContentInit - ' + this.parentContent);
    console.log('AfterContentInit - ' + this.childContent);
  }
 // its called after ngAfterContentInit
  ngAfterContentChecked() {
    console.log('Child After Content checked');
    console.log('AfterContentChecked - ' + this.childContent);
  }
// its called once after .......
  ngAfterViewInit() {
    console.log('Child After View Init');
    console.log('AfterViewInit - ' + this.childContent);
  }
 //......
  ngAfterViewChecked() {
    console.log('Child After View checked');
  }
}
