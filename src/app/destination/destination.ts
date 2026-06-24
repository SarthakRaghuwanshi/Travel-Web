import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

type MonthTone = 'sunny' | 'cloudy' | 'rainy' | 'highrainy';

type BestMonth = {
  month: string;
  temp: string;
  icon: string;
  tone: MonthTone;
  height: number;
};

type DestinationModel = {
  id: string;
  name: string;
  flag: string;
  mapImage: string;
  bestMonths: BestMonth[];
};

@Component({
  selector: 'app-destination',
  imports: [CommonModule],
  templateUrl: './destination.html',
  styleUrl: './destination.css',
})
export class Destination {
  @Output() destinationChange = new EventEmitter<{ id: string; name: string }>();

  protected readonly destinations: DestinationModel[] = [
    {
      id: 'bali',
      name: 'Bali',
      flag: 'assets/icons/Bali.png',
      mapImage: 'assets/maps/Bali.svg',
      bestMonths: [
        { month: 'J', temp: '32C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 48 },
        { month: 'F', temp: '32C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 48 },
        { month: 'M', temp: '32C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 66 },
        { month: 'A', temp: '28C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 60 },
        { month: 'M', temp: '25C', icon: 'assets/icons/rainy.png', tone: 'rainy', height: 54 },
        { month: 'J', temp: '30C', icon: 'assets/icons/highrainy.png', tone: 'highrainy', height: 42 },
        { month: 'J', temp: '33C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 50 },
        { month: 'A', temp: '27C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 44 },
        { month: 'S', temp: '29C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 52 },
        { month: 'O', temp: '31C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 58 },
        { month: 'N', temp: '26C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 52 },
        { month: 'D', temp: '34C', icon: 'assets/icons/highrainy.png', tone: 'highrainy', height: 60 },
      ],
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: 'assets/icons/Australia.png',
      mapImage: 'assets/maps/Australia.svg',
      bestMonths: [
        { month: 'J', temp: '28C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 56 },
        { month: 'F', temp: '29C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 58 },
        { month: 'M', temp: '26C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 52 },
        { month: 'A', temp: '23C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 44 },
        { month: 'M', temp: '20C', icon: 'assets/icons/rainy.png', tone: 'rainy', height: 38 },
        { month: 'J', temp: '18C', icon: 'assets/icons/rainy.png', tone: 'rainy', height: 34 },
        { month: 'J', temp: '17C', icon: 'assets/icons/highrainy.png', tone: 'highrainy', height: 32 },
        { month: 'A', temp: '19C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 36 },
        { month: 'S', temp: '22C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 42 },
        { month: 'O', temp: '24C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 46 },
        { month: 'N', temp: '26C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 50 },
        { month: 'D', temp: '27C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 52 },
      ],
    },
    {
      id: 'brazil',
      name: 'Brazil',
      flag: 'assets/icons/Brazil.png',
      mapImage: 'assets/maps/Brazil.svg',
      bestMonths: [
        { month: 'J', temp: '30C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 52 },
        { month: 'F', temp: '31C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 56 },
        { month: 'M', temp: '29C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 50 },
        { month: 'A', temp: '27C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 46 },
        { month: 'M', temp: '25C', icon: 'assets/icons/rainy.png', tone: 'rainy', height: 40 },
        { month: 'J', temp: '24C', icon: 'assets/icons/rainy.png', tone: 'rainy', height: 38 },
        { month: 'J', temp: '24C', icon: 'assets/icons/highrainy.png', tone: 'highrainy', height: 38 },
        { month: 'A', temp: '26C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 42 },
        { month: 'S', temp: '27C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 46 },
        { month: 'O', temp: '28C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 48 },
        { month: 'N', temp: '29C', icon: 'assets/icons/cloudy.png', tone: 'cloudy', height: 50 },
        { month: 'D', temp: '30C', icon: 'assets/icons/sunny.png', tone: 'sunny', height: 52 },
      ],
    },
  ];

  protected selectedDestination = this.destinations[0];

  constructor() {
    this.destinationChange.emit({
      id: this.selectedDestination.id,
      name: this.selectedDestination.name,
    });
  }

  protected selectDestination(destinationId: string): void {
    const nextDestination = this.destinations.find(
      (destination) => destination.id === destinationId,
    );

    if (nextDestination) {
      this.selectedDestination = nextDestination;
      this.destinationChange.emit({
        id: nextDestination.id,
        name: nextDestination.name,
      });
    }
  }
}
