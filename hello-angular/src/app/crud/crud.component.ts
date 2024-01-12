import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from './productService';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export interface Products {
  id: number;
  productName: string;
  category: string;
  condition: string;
  price: number;
  comment: string;
  date: Date
}

export interface ProductNotId {
  productName: string | null;
  category: string | null;
  condition: string | null;
  price: number | null;
  comment: string | null;
  date: Date | null
}

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MatSortModule, MatPaginatorModule, MatTableModule,
    MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})

export class CrudComponent implements OnInit {

  constructor(private service: ProductService) { }

  displayedColumns: string[] = ['id', 'productName', 'category', 'condition', 'price', 'comment', 'date'];
  dataSource!: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  values!: Products[];

  url = "https://localhost:7083/api/Products/GetAllProduct";

  applyForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    condition: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    comment: new FormControl('', Validators.required),
    date: new FormControl(null, Validators.required),
  });

  async ngOnInit() {
    (await this.service.getAllProducts()).subscribe(response => {
      console.log('get successful', response);
      this.values = response!;
      this.dataSource = new MatTableDataSource(this.values);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  async sendProduct() {
    await this.service.createProduct(this.applyForm.getRawValue());
  }

  async sendProductDelete(id: any) {
    await this.service.deleteProduct(+id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}