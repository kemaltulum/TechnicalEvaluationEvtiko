import {Component, OnInit, ViewChild} from '@angular/core';
import {Home} from './modals/home.interface';
import {BackendService} from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('priceFilter') priceFilter;
  @ViewChild('roomFilter') roomFilter;

  homesShown: Array<Home>;
  homesOriginal: Array<Home>;

  constructor(private backendService: BackendService){}

  ngOnInit() {
    this.backendService.getHomes()
      .subscribe(
        (homes: Array<Home>) => {
          this.homesShown = homes;
          this.homesOriginal = homes;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onFilterClicked() {
    const priceFilter = this.priceFilter.nativeElement.value;
    const roomFilter = this.roomFilter.nativeElement.value;

    this.filterHomes(priceFilter, roomFilter);
  }

  filterHomes(priceFilter, roomFilter){
    if (priceFilter === '' && roomFilter === ''){
      this.homesShown = this.homesOriginal;
    } else {
      const filterPriceVals = priceFilter.split('-');
      const lowerLimit = parseInt(filterPriceVals[0], 10);
      const upperLimit = parseInt(filterPriceVals[1], 10);

      if (priceFilter === '') {
        this.homesShown = this.homesOriginal.filter(
          (home: Home) => {
            return this.filterAccRoom(home, roomFilter);
          }
        );
      } else if (roomFilter === ''){
        this.homesShown = this.homesOriginal.filter(
          (home: Home) => {
            return this.filterAccPrice(home, lowerLimit, upperLimit);
          }
        );
      } else {
        this.homesShown = this.homesOriginal.filter(
          (home: Home) => {
            return this.filterAccRoom(home, roomFilter) && this.filterAccPrice(home, lowerLimit, upperLimit);
          }
        );
      }
    }
  }
  filterAccPrice(home: Home, lower, upper) {
    if (upper === 0) {
      return home.price >= lower;
    } else {
      return home.price >= lower && home.price <= upper;
    }
  }
  filterAccRoom(home: Home, rooms) {
    return home.roomNum === rooms;
  }
}
