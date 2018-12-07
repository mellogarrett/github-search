import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchService, SearchReducer } from "./components/search";
import { SearchResultComponent } from './components/search/search-result/search-result.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, SearchResultComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ searchResults: SearchReducer })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
