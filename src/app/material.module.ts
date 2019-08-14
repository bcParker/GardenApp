import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
	imports: [
		MatMenuModule, 
		MatSidenavModule, 
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
	],
	exports: [
		MatMenuModule,
		MatSidenavModule, 
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
	]
})

export class MaterialModule {}