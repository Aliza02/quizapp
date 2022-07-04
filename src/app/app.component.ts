import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'quizeapp';

  
  constructor(){}

  ngOnInit(): void {
    }

    start(){
      console.log('asda');
          let containerFluid=document.querySelector('.container-fluid');
          let question_1=document.querySelector('.question-1');
          let submit=document.querySelector('.start-btn');
            question_1?.classList.add('active');
            containerFluid?.classList.remove('active');         
    }

}
