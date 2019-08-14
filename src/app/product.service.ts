import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productUrl: string = 'http://localhost:3000/api/product';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }

}
