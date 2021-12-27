import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/authService.service';
import { AddTemoignageComponent } from './add-temoignage/add.temoignage.component';
@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.css']
})
export class TemoignagesComponent implements OnInit {
  public temoignages_: any = []; 
  public page: any;
  public count = 6;
  filteredItems;
  searchForm: FormGroup
  constructor( public dialog: MatDialog, private formBuilder: FormBuilder, public authService: AuthService) {
    
  }

  ngOnInit(): void {
    this.temoignages();
    this.searchForm = this.formBuilder.group({
        message:new FormControl(null)
      })
  }

  public temoignages(){  
    
    this.authService.getsEntite("pub-temoignages").then(
      (res:any)=>{
        this.filteredItems = this.temoignages_ = res
        console.log(res)
      }).catch((err)=>{console.log(err)})

    // this.appService.getMtemoignages_("temoignages_").subscribe(data => {
    //   console.log("data : ", data)
    //   this.temoignages_ = data; 
    //   this.temoignages_.shift();
    // }); 
  }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

  public openTemoignageDialog(data:any){
    const dialogRef = this.dialog.open(AddTemoignageComponent , {
      data: {
        temoignage: data,
        temoignages: this.temoignages_
      },
     
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(temoignage => { 
      if(temoignage){    
        const index: number = this.temoignages_.findIndex(x => x.id == temoignage.id);
        if(index !== -1){
          this.temoignages_[index] = temoignage;
        } 
        else{ 
          let last_category = this.temoignages_[this.temoignages_.length - 1]; 
          temoignage.id = last_category.id + 1;
          this.temoignages_.push(temoignage);  
        }          
      }
    });
  }

  public remove(category:any){  
    const dialogRef = this.dialog.open(AddTemoignageComponent, {
      maxWidth: "400px",
      data: {
        title: "Confirm Action",
        message: "Etes-vous sûre de vouloir suprimer ce témoignage ?"
      }
    }); 
    dialogRef.afterClosed().subscribe(dialogResult => { 
      if(dialogResult){
        const index: number = this.temoignages_.indexOf(category);
        if (index !== -1) {
          this.temoignages_.splice(index, 1);  
        } 
      } 
    }); 
  }

  filterResults() {
    if (!this.searchForm.value.message) {
      this.filteredItems = [...this.temoignages_];
    } else {
      this.filteredItems = [];
      this.filteredItems = this.temoignages_.filter((temoignage) => {

        return temoignage.message.toUpperCase().indexOf(this.searchForm.value.message.toUpperCase()) > -1;
      });
    }
 }

}
