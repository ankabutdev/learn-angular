import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductNotId, Products } from "./crud.component";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {
    }

    urlGet = "https://localhost:7083/api/Products/GetAllProduct";
    urlUpdate = "https://localhost:7083/api/Products/UpdateProduct";
    urlCreate = "https://localhost:7083/api/Products/CreateProduct";
    urlDelete = "https://localhost:7083/api/Products/DeleteProduct";

    async getAllProducts() {
        return await this.http.get<Products[]>(this.urlGet)
            .pipe(
                catchError((error: any) => {
                    console.error('Error fetching products:', error);
                    throw error;
                })
            );
    }

    async createProduct(data: ProductNotId) {
        return await this.http.post(this.urlCreate, data);
    }

    async getById(id: number) {
        return await this.http.get<Products>(this.urlGet + "?Id=" + id);
    }

    async updateProduct(id: number, data: Products) {
        return await this.http.put(this.urlUpdate + "?Id=" + id, data);
    }

    async deleteProduct(id: number) {
        return await this.http.delete(this.urlDelete + "?Id=" + id)
    }
}