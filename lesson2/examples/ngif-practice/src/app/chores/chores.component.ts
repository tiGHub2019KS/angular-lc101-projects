import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Clean bathroom','Clean cats litterbox'];
   todoChores = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];
   finishedChores = [];

   trophyImage = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
   
   constructor() { }

   ngOnInit() {
   }

}
