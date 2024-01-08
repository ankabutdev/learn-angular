import { Injectable } from '@angular/core';
import { CreateUser, HousingLocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private client: HttpClient) {

  }

  url = 'http://localhost:3000/locations';
  url2 = 'http://localhost:3000/locationCreate';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async submitApplication(firstName: string, lastName: string, email: string) {
    // await console.log(firstName, lastName, email);
  }

  async createUser(data: CreateUser): Promise<Observable<any>> {
    return await this.client.post(this.url2, data);
  }
}
