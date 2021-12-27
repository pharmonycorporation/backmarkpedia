import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/authService.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  userAuth;
   userProfile;
   suggestions;
   errorMessage;
   public page: any;
   public count = 6;
   filteredItems;
   searchForm: FormGroup
   horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private authService:AuthService, private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
      //commande-prestataire
      //window.open('http://www.example.com?ReportID=1', '_blank');
      //this.openSnackBar("etsts");
      this.searchForm = this.formBuilder.group({
        question:new FormControl(null)
      })
      this.userAuth = JSON.parse(sessionStorage.getItem("usersessionid"));
      this.userProfile= this.userAuth.user;
      this.authService.getsEntite('suggestions').then( (response: any) => {
           
        if(response.error){
            this.errorMessage = "Aucun litige n'a été enregistré sur la plateforme";
        }else{
            this.filteredItems = this.suggestions = response
            console.log(this.suggestions)
        }
            
            
            // console.log(response)
           //this.participations.push (response)
          //console.log("Liste des prestataire: "+this.prestataires)
          }
        ).catch(
         (error) => {
          
          this.errorMessage = error.message;
          console.log(error)
          }
        );
        // console.log("les suggestions : ",this.suggestions)

  }
  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

  filterResults() {
    if (!this.searchForm.value.question) {
      this.filteredItems = [...this.suggestions];
    } else {
      this.filteredItems = [];
      this.filteredItems = this.suggestions.filter((commande) => {
        return commande.demande.dateDebut.toUpperCase().indexOf(this.searchForm.value.question.toUpperCase()) > -1;
      });
    }
 }
  openSnackBar(message) {
    this._snackBar.open(message, 'Fermer', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  deleteCommande(id){
      let rep = confirm("êtes-vous sûre de vouloir supprimer cette commande ?")
        if(rep){
            //opération de suppression de la commande
            this.openSnackBar("votre commande a été supprimé")

        }
    }
    terminerCommande(id){
        let rep = confirm("êtes-vous sûre de vouloir livrer la commande ?")
        if(rep){
            //opération de livraison de la commande
            this.openSnackBar("votre commande a été livrée")

        }
    }
    enAttente(id){
        let rep = confirm("êtes-vous sûre de vouloir remettre  cette commande en attent ?")
        if(rep){
            //opération de mise en  attente
            this.openSnackBar("votre commande a desormais le status en attente")

        }
    }
    refuserCommande(id){
        let rep = confirm("êtes-vous sûre de vouloir refuser  cette commande en attent ?")
        if(rep){
            //opération de mise en  attente
            this.openSnackBar("une notification de refus a été envoyé au demandeur")

        }
    }
  checkUncheckAll(event) {
     var checkboxes = document.getElementsByTagName('input');
     if (event.target.checked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             // console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
 }

}
