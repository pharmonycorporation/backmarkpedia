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
  selector: 'app-deals-dialog',
  templateUrl: './deals-dialog.component.html',
  styleUrls: ['./deals-dialog.component.css'],
})
export class DealsDialogComponent implements OnInit {
  public form: FormGroup;
  srcResult;
  imageSrc;
  file: File;
  constructor(public dialogRef: MatDialogRef<DealsDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder,
              public authService : AuthenticationService) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      id: 0,
      product_id:[0, Validators.required],
      dealy_deals_date: [null, Validators.required],
      dealy_deals_price: [null, Validators.required],
      dealy_deals_stock: [null, Validators.required],
    
    }); 

    if(this.data.deal){
      this.form.patchValue(this.data.deal); 
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
    // console.log(this.form.value);
    // const formData: FormData = new FormData();
    // if(this.form.get("id").value==0){
     
    //   if (this.file != null) {
    //     formData.append("image", this.file, this.file.name);
    //   }else{
    //     formData.append("image", "");
    //   }
    //   formData.append("name", this.form.get('name')!.value);
    //   formData.append("hasSubCategory", this.form.get('hasSubCategory')!.value);
    //   formData.append("additional", this.form.get('additional')!.value);
    //   formData.append("parent_id", this.form.get('parent_id')!.value);
    //   // formData.append("password", this.form.get('password')!.value);
      
    //   this.authService.createNewUser("api/categories/",formData).then((res)=>{
    //     console.log(res)
    //     this.dialogRef.close(this.form.value);
    // }).catch((error)=>{

    // })
    // }else{
    //   if (this.file != null) {
    //     formData.append("image", this.file, this.file.name);
    //   }else{
    //     // formData.append("image", "");
    //   }
    //   formData.append("ID", this.form.get("id")!.value);
    //   formData.append("name", this.form.get('name')!.value);
    //   formData.append("hasSubCategory", this.form.get('hasSubCategory')!.value);
    //   formData.append("additional", this.form.get('additional')!.value);
    //   formData.append("parent_id", this.form.get('parent_id')!.value);

    //   this.authService.upDateUser("api/categories/"+this.form.get("id").value+"/",formData).then((res)=>{
    //     this.dialogRef.close(this.form.value);
    //     console.log(res)
    // }).catch((error)=>{

    // })
    // }
    if(this.form.get("id").value==0){
        // console.log(this.form.value);
        let pipe = new DatePipe('en-US');
        let d = this.form.get('dealy_deals_date').value;
        this.form.get('dealy_deals_date').setValue(pipe.transform(d, 'YYYY-MM-dd')); 
        // console.log(this.form.value);
        this.authService.createNewUser("api/dealsday/",this.form.value).then((res)=>{
                console.log(res)
                this.dialogRef.close(this.form.value);
            }).catch((error)=>{
        
            });
    
    }else{
        // console.log(this.form.value);
        let pipe = new DatePipe('en-US');
        let d = this.form.get('dealy_deals_date').value;
        this.form.get('dealy_deals_date').setValue(pipe.transform(d, 'YYYY-MM-dd')); 
        // console.log(this.form.value);
        this.authService.upDateUser("api/dealsday/"+this.form.get("id").value+"/",this.form.value).then((res)=>{
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
