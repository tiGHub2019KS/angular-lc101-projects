import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://vignette.wikia.nocookie.net/disney/images/0/01/Toy_Story_4_first_look.png/revision/latest/scale-to-width-down/185?cb=20181112151309';
  image3 = 'https://image.shutterstock.com/image-photo/green-shopping-bag-grocery-products-260nw-144819322.jpg';

  constructor() { }

  ngOnInit() {
  }

}