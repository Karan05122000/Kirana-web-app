import { Sent } from './../../models/models';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogAddItemComponent, {
      width: '350px',
      data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-add-items-dialogue',
  templateUrl: './add-items-dialogue.html',
  styleUrls: ['./add-items-dialogue.scss']
})

export class DialogAddItemComponent {
  categorySelected;
  subCategorySelected;
  brandSelected;
  quantitySelected;
  variantSelected;


  categories = [
    'Dairy',
    'Grocery',
  ];
  sub_categories = {
    Dairy : [
      'Milk',
      'Butter'
    ],
    Grocery : [
      'Rice',
      'Wheat'
    ]
  };
  brands = {
    Rice : [
      'Basmathi'
    ],
    Milk : [
      'Nandhini',
    ],
    Wheat : [
      'Pillsburry'
    ]
  };
  quantity_types = [
    'ml', 'ltr', 'kg', 'unit', 'gm'
  ];
  variants = {
    ml : [100, 250, 500],
    ltr : [1],
    kg : [1],
    unit : [1],
    gm : [100, 250, 500]
  };
  isAddCategory: boolean;
  isAddSubCategory: boolean;
  isAddBrand: boolean;
  newProduct = new Sent();
  post: any;
  itemForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogAddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) {
      console.log(this.itemForm);
      this.itemForm = fb.group({
        categorySelected: new FormControl(null, Validators.required),
        subCategorySelected: new FormControl(null, Validators.required),
        brandSelected: new FormControl(null, Validators.required),
        nameSelected: new FormControl(null, Validators.required),
        quantitySelected: new FormControl(),
        variantSelected: new FormControl(),
        detailsSelected: new FormControl(),
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addCategory() {
    this.isAddCategory = this.isAddCategory ? false : true;
  }
  addSubCategory() {
    this.isAddSubCategory = this.isAddSubCategory ? false : true;
  }
  addBrand() {
    this.isAddBrand = this.isAddBrand ? false : true;
  }
  // tslint:disable-next-line: variable-name
  addItem(_post) {
  this.newProduct.category = _post.category;
  console.log(this.newProduct.category);
  }
}
