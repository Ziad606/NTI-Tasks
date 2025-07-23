import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-manager',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.scss',
})
export class ProductManagerComponent {
  products: Product[] = [];
  newProduct: Product = {} as Product;
  id: number = 1;
  editedProduct: Product | undefined = undefined;
  isEditing: boolean = false;
  addProduct() {
    if (!this.newProduct.name || this.newProduct.price == null) {
      return;
    }
    if (this.isEditing && this.editedProduct) {
      const index = this.products.findIndex(
        (p) => p.id === this.editedProduct!.id
      );
      if (index !== -1) {
        this.products[index] = { ...this.newProduct };
      }
      this.isEditing = false;
      this.editedProduct = undefined;
    } else {
      this.newProduct.id = this.id;
      this.products.push({ ...this.newProduct });
      this.id++;
    }
    this.newProduct = {} as Product;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
    // If deleting the product being edited, reset form
    if (this.isEditing && this.editedProduct && this.editedProduct.id === id) {
      this.isEditing = false;
      this.editedProduct = undefined;
      this.newProduct = {} as Product;
    }
  }

  editProduct(id: number) {
    this.editedProduct = this.products.find((p) => p.id == id);
    this.newProduct = { ...this.editedProduct } as Product;
    this.isEditing = true;
  }
}
