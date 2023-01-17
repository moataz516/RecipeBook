import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class headerComponent {
  constructor(private DataStorageService: DataStorageService) {}

  onSaveData() {
    this.DataStorageService.storeRecipe();
  }
  onFetchData() {
    this.DataStorageService.fetchRecipes().subscribe();
  }
}
