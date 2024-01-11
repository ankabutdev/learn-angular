import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from './productService';

export interface Products {
  id: number;
  productName: string;
  category: string;
  condition: string;
  price: number;
  comment: string;
  date: Date
}

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MatSortModule, MatPaginatorModule, MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})

export class CrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productName', 'category', 'condition', 'price', 'comment', 'date'];
  dataSource!: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  values!: Products[];

  url = "https://localhost:7083/api/Products/GetAllProduct";

  constructor(private service: ProductService) {
  }

  ngOnInit() {

    this.service.getAllProducts().subscribe(response => {
      console.log('get successful', response);
      this.values = response!;
      this.dataSource = new MatTableDataSource(this.values);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}