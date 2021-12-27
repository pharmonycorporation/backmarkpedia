import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/authService.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {
  userAuth;
   userProfile;
   reclamations;
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
      //reclamation-prestataire
      //window.open('http://www.example.com?ReportID=1', '_blank');
      //this.openSnackBar("etsts");
      this.searchForm = this.formBuilder.group({
        question:new FormControl(null)
      })
      this.userAuth = JSON.parse(sessionStorage.getItem("usersessionid"));
      this.userProfile= this.userAuth.user;
      this.authService.getsEntite('reclamations').then( (response: any) => {
           
        if(response.error){
            this.errorMessage = "Aucune reclamation n'a été enregistré sur la plateforme";
        }else{
            this.filteredItems = this.reclamations = response
            console.log(this.reclamations)
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
        // console.log("les reclamations : ",this.reclamations)

  }
  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

  filterResults() {
    if (!this.searchForm.value.question) {
      this.filteredItems = [...this.reclamations];
    } else {
      this.filteredItems = [];
      this.filteredItems = this.reclamations.filter((reclamation) => {
        return reclamation.demande.dateDebut.toUpperCase().indexOf(this.searchForm.value.question.toUpperCase()) > -1;
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
      let rep = confirm("êtes-vous sûre de vouloir supprimer cette reclamation ?")
        if(rep){
            //opération de suppression de la reclamation
            this.openSnackBar("votre reclamation a été supprimé")

        }
    }
    terminerCommande(id){
        let rep = confirm("êtes-vous sûre de vouloir livrer la reclamation ?")
        if(rep){
            //opération de livraison de la reclamation
            this.openSnackBar("votre reclamation a été livrée")

        }
    }
    enAttente(id){
        let rep = confirm("êtes-vous sûre de vouloir remettre  cette reclamation en attent ?")
        if(rep){
            //opération de mise en  attente
            this.openSnackBar("votre reclamation a desormais le status en attente")

        }
    }
    refuserCommande(id){
        let rep = confirm("êtes-vous sûre de vouloir refuser  cette reclamation en attent ?")
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
