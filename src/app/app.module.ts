// src/app/app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from "./app.component";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ResultsComponent } from './results/results.component';

import { RouterModule, Routes } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: "maths", pathMatch: "prefix" },
];

@NgModule({
  declarations: [AppComponent, QuestionFormComponent, ResultsComponent, QuestionsComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MatCardModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
