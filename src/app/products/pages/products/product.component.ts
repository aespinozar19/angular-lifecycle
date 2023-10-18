import { AfterContentChecked, AfterViewChecked, AfterViewInit,
  Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-products-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges,
DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  public isProductVisible: boolean = false;
  public currentPrice: number = 123;

  constructor() {
    console.log('constructor');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
 ngAfterViewInit(): void {;
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {;
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {;
    console.log('ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges( changes: SimpleChanges ): void {
    console.log({ changes });
    console.log('ngOnChanges');
  }

  increasePrice() {
    this.currentPrice++;
  }



}
