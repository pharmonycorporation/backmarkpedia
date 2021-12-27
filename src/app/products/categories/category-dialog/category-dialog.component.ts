import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {
  public form: FormGroup;
  srcResult;
  imageSrc;
  file: File;
  constructor(public dialogRef: MatDialogRef<CategoryDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder,
              public authService : AuthenticationService) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      id: 0,
      image: [null, Validators.required],
      name: [null, Validators.required],
      hasSubCategory: false,
      additional: [null, Validators.required],
      parent_id: 0
    }); 

    if(this.data.category){
      this.form.patchValue(this.data.category); 
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
    const formData: FormData = new FormData();
    if(this.form.get("id").value==0){
     
      if (this.file != null) {
        formData.append("image", this.file, this.file.name);
      }else{
        formData.append("image", "");
      }
      formData.append("name", this.form.get('name')!.value);
      formData.append("hasSubCategory", this.form.get('hasSubCategory')!.value);
      formData.append("additional", this.form.get('additional')!.value);
      formData.append("parent_id", this.form.get('parent_id')!.value);
      // formData.append("password", this.form.get('password')!.value);
      
      this.authService.createNewUser("api/categories/",formData).then((res)=>{
        console.log(res)
        this.dialogRef.close(this.form.value);
    }).catch((error)=>{

    })
    }else{
      if (this.file != null) {
        formData.append("image", this.file, this.file.name);
      }else{
        // formData.append("image", "");
      }
      formData.append("ID", this.form.get("id")!.value);
      formData.append("name", this.form.get('name')!.value);
      formData.append("hasSubCategory", this.form.get('hasSubCategory')!.value);
      formData.append("additional", this.form.get('additional')!.value);
      formData.append("parent_id", this.form.get('parent_id')!.value);

      this.authService.upDateUser("api/categories/"+this.form.get("id").value+"/",formData).then((res)=>{
        this.dialogRef.close(this.form.value);
        console.log(res)
    }).catch((error)=>{

    })
    }
   
    // if(this.form.valid){
    //   this.dialogRef.close(this.form.value);
    // }
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
