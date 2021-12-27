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
  selector: 'app-add-banners-dialog',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css'], 
})
export class AddBannerComponent implements OnInit {
  public form: FormGroup;
  srcResult;
  imageSrc;
  file: File;
  constructor(public dialogRef: MatDialogRef<AddBannerComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder,
              public authService : AuthenticationService) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      id: 0,
      product_id:[0, Validators.required],
      image: [null, Validators.required],
      title: [null, Validators.required],
      subtitle: [null, Validators.required],
      banner_type: [null, Validators.required] 
    }); 

    if(this.data.banner){
      this.form.patchValue(this.data.banner); 
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
    console.log(this.form.value);
    const formData: FormData = new FormData();
    if(this.form.get("id").value==0){
      
          if (this.file != null) {
            formData.append("image", this.file, this.file.name);
          }else{
            formData.append("image", "");
          }
              formData.append("title", this.form.get('title')!.value);
              formData.append("subtitle", this.form.get('subtitle')!.value);
              formData.append("banner_type", this.form.get('banner_type')!.value);
              formData.append("product_id", this.form.get('product_id')!.value); 
              formData.append("is_banner","true");
              formData.append("is_brand", "false");
              formData.append("is_slider", "false");
              formData.append("is_active", "true");
              formData.append("is_verifie", "false");
              
              this.authService.createNewUser("api/banners/",formData).then((res)=>{
                console.log(res)
                this.dialogRef.close(this.form.value);
            }).catch((error)=>{
        
            });
    }else{
              formData.append("title", this.form.get('title')!.value);
              formData.append("subtitle", this.form.get('subtitle')!.value);
              formData.append("banner_type", this.form.get('banner_type')!.value);
              formData.append("product_id", this.form.get('product_id')!.value);
              formData.append("is_banner","true");
              formData.append("is_brand", "false");
              formData.append("is_slider", "false");
              formData.append("is_active", "true");
              formData.append("is_verifie", "false");

          this.authService.upDateUser("api/banners/",formData).then((res)=>{
            console.log(res)
            this.dialogRef.close(this.form.value);
        }).catch((error)=>{

        });
     
    }
    // if(this.form.get("id").value==0){
    //     // console.log(this.form.value);
    //     // let pipe = new DatePipe('en-US');
    //     // let d = this.form.get('bannery_banners_date').value;
    //     // this.form.get('bannery_banners_date').setValue(pipe.transform(d, 'YYYY-MM-dd')); 
    //     // // console.log(this.form.value);
      
    
    // }else{
    //     // console.log(this.form.value);
    //     // let pipe = new DatePipe('en-US');
    //     // let d = this.form.get('bannery_banners_date').value;
    //     // this.form.get('bannery_banners_date').setValue(pipe.transform(d, 'YYYY-MM-dd')); 
    //     // console.log(this.form.value);
    //     this.authService.upDateUser("api/banners/"+this.form.get("id").value+"/",this.form.value).then((res)=>{
    //             console.log(res)
    //             this.dialogRef.close(this.form.value);
    //         }).catch((error)=>{
        
    //         });
    // }
 
    
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
