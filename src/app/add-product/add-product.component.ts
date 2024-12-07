import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AddProductComponent implements OnInit {
  productsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      color: ['', Validators.required],
      size: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productsForm.valid) {
      console.log(this.productsForm.value);
    } else {
      this.productsForm.markAllAsTouched();
    }
  }
}
