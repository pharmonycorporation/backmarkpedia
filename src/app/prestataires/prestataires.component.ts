import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-prestataires',
  templateUrl: './prestataires.component.html',
  styleUrls: ['./prestataires.component.css']
})
export class PrestatairesComponent implements OnInit {
  prestataires:any=[];
  errorMessage;
  public page: any;
  public count = 6;
  searchForm: FormGroup;
  filteredItems;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private router: Router, private _snackBar: MatSnackBar , private authService: AuthenticationService, private formBuilder: FormBuilder) { 
    this.getListPrestataire();
    this.updateTransactionListing();
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      nom:new FormControl(null)
    })
  }
  mettreEnAvant(prestataire,val){
    const data = {
      val :val
    }
    this.authService.upDateUser("/mettre-enavant-prestataire/"+prestataire.id+"/", data).then((res)=>{
      
      this.openSnackBar("le status du prestataire a été mis à jour ");
        let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);  
    }).catch((error)=>{

    });
    
    
  }
  desactiver(prestataire,actif){
    const data = {
      actif :actif
    }
    this.authService.upDateUser("/prestataire-activer-desactiver/"+prestataire.id+"/", data).then((res)=>{
      
      this.openSnackBar("le compte du prestataire a été mis à jour ");
        let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);  
    }).catch((error)=>{

    });
    
    
  }
  getListPrestataire(){
    this.authService.getsEntite("api/marketplacesellers").then(
      (response) => {
        console.log(response);
         this.filteredItems = this.prestataires = response;
        
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );
  }
  openSnackBar(message) {
    this._snackBar.open(message, 'Fermer', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }
  pageSize = 6;
  collectionSize = this.prestataires.length;
  updateTransactionListing() {
    this.prestataires
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  filterResults() {
    if (!this.searchForm.value.nom) {
      this.filteredItems = [...this.prestataires];
    } else {
      this.filteredItems = [];
      this.filteredItems = this.prestataires.filter((prestataire) => {
        return prestataire.shop_title.toUpperCase().indexOf(this.searchForm.value.nom.toUpperCase()) > -1;
      });
    }
 }
}
