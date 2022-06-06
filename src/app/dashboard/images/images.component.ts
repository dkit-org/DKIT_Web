import { Component, OnInit } from '@angular/core';
import {ImagesService} from "./images.service";
import {Observable} from "rxjs";
import {Image} from "./image";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImagesService) { }

  $images = this.imageService.getImages();

  ngOnInit(): void {

  }


}
