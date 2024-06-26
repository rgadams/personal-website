import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app-routing.module';
import { AppComponent } from 'src/components/app/app.component';
import { CanvasThreeDimensionsComponent } from './components/canvas-three-dimensions/canvas-three-dimensions.component';
import { ParallelWorkersComponent } from './components/parallel-workers/parallel-workers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AboutComponent } from 'src/components/about/about.component';
import { MenuModule } from './components/menu/menu.module';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        CanvasThreeDimensionsComponent,
        ParallelWorkersComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        DragDropModule,
        NgbModule,
        MenuModule
    ],
    providers: [
        ReversePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
