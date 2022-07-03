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

    submit(){
      console.log('asda');
          let containerFluid=document.querySelector('.container-fluid');
        console.log(containerFluid);
    }

}
