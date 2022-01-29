import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private baseUrl = 'http://api.geonames.org/findNearbyPlaceNameJSON?username=pawme';
  constructor(private http: HttpClient) {}

  public getAddress(lat: number, lng: number) {
    return this.http.get(`${this.baseUrl}&lat=${lat}&lng=${lng}`);
  }
}
