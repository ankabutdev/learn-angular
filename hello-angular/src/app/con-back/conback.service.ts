import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category, CategoryCreate } from "./ConbackInterface";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    url = "https://localhost:7026/api/categories";

    async getAllCategories() {
        const data = await this.http.get<Category[]>(this.url);
        return await data;
    }

    async createCategory(data: CategoryCreate) {
        return await this.http.post(this.url, data);
    }
}