import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/authService.service';
// import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-temoignage',
  templateUrl: './add.temoignage.component.html',
  styleUrls: ['./add.temoignage.component.css']
})
export class AddTemoignageComponent implements OnInit {
  public form: FormGroup;
  srcResult;
  imageSrc;
  file: File;
  constructor(public dialogRef: MatDialogRef<AddTemoignageComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      id: 0,
      email:new FormControl(null),
      name:new FormControl(null),
      message:new FormControl(null),
      rating:new FormControl(null),
      active:false,
     
    }); 

    if(this.data.temoignage){
      this.form.patchValue(this.data.temoignage); 
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
   
    if(this.form.get("id").value==0){
     
      
      
      this.authService.createNewUser("pub-temoignages/",this.form.value).then((res)=>{
        console.log(res)
        this.dialogRef.close(this.form.value);
        }).catch((error)=>{

        })
    }else{
     

      this.authService.upDateUser("pub-temoignages/"+this.form.get("id").value+"/",this.form.value).then((res)=>{
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
