import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductNotId, Products } from "./crud.component";
import { catchError } from "rxjs";
import { ErrorStateMatcher } from "@angular/material/core";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

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
    urlGetById = "https://localhost:7083/api/Products/GetProductById"

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
        return await this.http.get<Products>(this.urlGetById + "?Id=" + id);
    }

    async updateProduct(id: number, data: ProductNotId) {
        return await this.http.put(this.urlUpdate + "?Id=" + id, data);
    }

    async deleteProduct(id: number) {
        return await this.http.delete(this.urlDelete + "?Id=" + id)
    }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}