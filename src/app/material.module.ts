import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule,
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatOptionModule, MatSelectModule,


  MatSidenavModule,
  MatGridListModule,
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatGridListModule
   MatOptionModule,
   MatSelectModule,
   MatSidenavModule
   ],
})
export class MaterialModule { }