import { Component } from '@angular/core';
import { Destination } from './destination/destination';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

type DestinationOption = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-root',
  imports: [Navbar, Destination, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected selectedDestinationName = 'Bali';

  protected onDestinationChange(destination: DestinationOption): void {
    this.selectedDestinationName = destination.name;
  }
}
