import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        titulo: 'Documento de Identidad',
        contenido: 'Targeta de Identidad: 1004034973'
      },
      {
        titulo: 'Codigo',
        contenido: '20201020008'
      },
      {
        titulo: 'Carrera',
        contenido: 'Ingeniaria de Sistemas'
      },
      {
        titulo: 'Universidad',
        contenido: 'Distrital Francisco Jose de Caldas'
      },
      {
        titulo: 'Telefono',
        contenido: '+57 3174713428'
      },
      {
        titulo: 'Pasatiempos',
        contenido: 'Jugar videojuedos, leer manga y comics, ver anime y streams'
      },
      {
        titulo: 'Musica Favorita',
        contenido: 'Electronica, Musica en ingles, Algunas variadas'
      }
    ];
  }

}
