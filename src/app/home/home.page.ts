import { Component, ViewChild } from '@angular/core';
import { List } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild(List) list: List;
  items = [
    ['X98A-123', 'Animales comiendo basura'],
    ['w91e-453', 'Basura en la via publica'],
    ['w91R-929', 'Boca de tormenta tapada']
  ];
  itemSelected(item: string) {
    console.log('Selected Item', item);
  }
}
