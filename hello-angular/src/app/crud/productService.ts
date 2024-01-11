import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Products } from "./crud.component";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {
    }

    url = "https://localhost:7083/api/Products/GetAllProduct";

   getAllProducts() {
        return this.http.get<Products[]>(this.url)
            .pipe(
                catchError((error: any) => {
                    console.error('Error fetching products:', error);
                    throw error;
                })
            );
    }

    async createProduct(data: Products) {
        return await this.http.post(this.url, data);
    }
}