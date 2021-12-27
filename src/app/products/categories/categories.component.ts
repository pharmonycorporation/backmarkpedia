import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AppSettings, Settings } from 'src/app/app.settings';
import { AuthenticationService } from 'src/app/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface PeriodicElement {
  name: string;
  position: number;
  parentId: number;
  hasSubCategory: boolean;
  action: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = []; 
  public page: any;
  public count = 6;
  public settings:Settings;
  dataSource: MatTableDataSource<Category>;
  constructor(public appService: AppService, public dialog: MatDialog, 
    public appSettings:AppSettings,
    public authService : AuthenticationService) {
    this.settings = this.appSettings.settings;
    this.getCategories();
  }

  ngOnInit(): void {
    
    
    
  }
  displayedColumns: string[] = ['position', 'name', 'parentId', 'hasSubCategory','action'];
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  public getCategories(){  
    
    this.authService.getsEntite("api/categories").then(
      (res:any)=>{
        this.categories = res
        this.dataSource = new MatTableDataSource(this.categories);
        console.log('datasource : ',this.dataSource)
        console.log(res)
      }).catch((err)=>{console.log(err)})

    // this.appService.getMCategories("categories").subscribe(data => {
    //   console.log("data : ", data)
    //   this.categories = data; 
    //   this.categories.shift();
    // }); 
  }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

  public openCategoryDialog(data:any){
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      data: {
        category: data,
        categories: this.categories
      },
      panelClass: ['theme-dialog'],
      autoFocus: false,
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(category => { 
      if(category){    
        const index: number = this.categories.findIndex(x => x.id == category.id);
        if(index !== -1){
          this.categories[index] = category;
        } 
        else{ 
          let last_category = this.categories[this.categories.length - 1]; 
          category.id = last_category.id + 1;
          this.categories.push(category);  
        }          
      }
    });
  }

  public remove(category:any){  
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Confirm Action",
        message: "Are you sure you want remove this category?"
      }
    }); 
    dialogRef.afterClosed().subscribe(dialogResult => { 
      if(dialogResult){
        const index: number = this.categories.indexOf(category);
        if (index !== -1) {
          this.categories.splice(index, 1);  
        } 
      } 
    }); 
  }

}
