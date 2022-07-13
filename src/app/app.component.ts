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
          let home=document.querySelector('.home');
          let question_1=document.querySelector('.question1');
          let progress=document.querySelector('.progress');
          progress?.classList.add('active');
            question_1?.classList.add('active');
            home?.classList.remove('active');      
    }
    
    question2(){
      let question_2=document.querySelector('.question2');
      let question_1=document.querySelector('.question1');
      question_1?.classList.remove('active');
      question_2?.classList.add('active');
    }
    question3(){
      let question_2=document.querySelector('.question2');
      let question_3=document.querySelector('.question3');
      question_2?.classList.remove('active');
      question_3?.classList.add('active');
    }
    question4(){
      let question_3=document.querySelector('.question3');
      let question_4=document.querySelector('.question4');
      question_3?.classList.remove('active');
      question_4?.classList.add('active');
    }
    question5(){
      let question_5=document.querySelector('.question5');
      let question_4=document.querySelector('.question4');
      question_4?.classList.remove('active');
      question_5?.classList.add('active');
    }
    question6(){
      let question_5=document.querySelector('.question5');
      let question_6=document.querySelector('.question6');
      question_5?.classList.remove('active');
      question_6?.classList.add('active');
    }
    question7(){
      let question_6=document.querySelector('.question6');
      let question_7=document.querySelector('.question7');
      question_6?.classList.remove('active');
      question_7?.classList.add('active');
    }
    question8(){
      let question_7=document.querySelector('.question7');
      let question_8=document.querySelector('.question8');
      question_7?.classList.remove('active');
      question_8?.classList.add('active');
    }
    question9(){
      let question_9=document.querySelector('.question9');
      let question_8=document.querySelector('.question8');
      question_8?.classList.remove('active');
      question_9?.classList.add('active');
    }
    question10(){
      let question_10=document.querySelector('.question10');
      let question_9=document.querySelector('.question9');
      question_9?.classList.remove('active');
      question_10?.classList.add('active');
    }

}
