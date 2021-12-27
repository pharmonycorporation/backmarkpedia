import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/auth.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDateFormats, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { DatePipe } from '@angular/common';
export const MY_FORMATS = {
    parse: {
      dateInput: 'YYYY-MM-dd',
    },
    display: {
      dateInput: 'YYYY-MM-dd',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };
  export const GRI_DATE_FORMATS: MatDateFormats = {
    ...MAT_NATIVE_DATE_FORMATS,
    display: {
      ...MAT_NATIVE_DATE_FORMATS.display,
      dateInput: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      } as Intl.DateTimeFormatOptions,
    }
  };
@Component({
  selector: 'app-add-featured',
  templateUrl: './add-featured.component.html',
  styleUrls: ['./add-featured.component.scss'],
})
export class AddFeaturedProductComponent implements OnInit {
  public form: FormGroup;
  srcResult;
  imageSrc;
  file: File;
  constructor(public dialogRef: MatDialogRef<AddFeaturedProductComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder,
              public authService : AuthenticationService) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      id:0,
      product_id:[0, Validators.required],
    }); 

    if(this.data.featured){
      this.form.patchValue(this.data.featured); 
    };
  }
  onFileChange(event) {
    const reader = new FileReader();
     if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      
      this.file = file;
      }

      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }
    }
  public onSubmit(){
    
    if(this.form.get("product_id").value==0){
        
    }else{
      console.log(this.form.value);
      
        this.authService.upDateUser("api/featured_vendor_product_list/"+this.form.get("product_id").value+"/",this.form.value).then((res)=>{
                console.log(res)
                this.dialogRef.close(this.form.value);
            }).catch((error)=>{
        
            });
    }
 
    
    if(this.form.valid){
      this.dialogRef.close(this.form.value); 
    }
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  

}
