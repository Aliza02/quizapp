import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'quizeapp';
  public progressValue:any;
  public correct=false;
  public ans=0;
  public win=false;
  
  
  constructor(){
  }



  ngOnInit(): void {
    }
    
    start(){
          let home=document.querySelector('.home');
          let question_1=document.querySelector('.question1');
          let progress=document.querySelector('.progress');
          progress?.classList.add('active');
            question_1?.classList.add('active');
            home?.classList.remove('active');    
           this. progressValue  =0;
           

           
    }
    
    question2(){
      let question_2=document.querySelector('.question2');
      let question_1=document.querySelector('.question1');
      question_1?.classList.remove('active');
      question_2?.classList.add('active');
      this. progressValue  +=10;
    
      }

    question3(){
      let question_2=document.querySelector('.question2');
      let question_3=document.querySelector('.question3');
      question_2?.classList.remove('active');
      question_3?.classList.add('active');
      this. progressValue+=10;  
    }
    question4(){
      let question_3=document.querySelector('.question3');
      let question_4=document.querySelector('.question4');
      question_3?.classList.remove('active');
      question_4?.classList.add('active');
      this. progressValue+=10;
    }
    question5(){
      let question_5=document.querySelector('.question5');
      let question_4=document.querySelector('.question4');
      question_4?.classList.remove('active');
      question_5?.classList.add('active');
      this. progressValue+=10;
    }
    question6(){
      let question_5=document.querySelector('.question5');
      let question_6=document.querySelector('.question6');
      question_5?.classList.remove('active');
      question_6?.classList.add('active');
      this. progressValue+=10;
    }
    question7(){
      let question_6=document.querySelector('.question6');
      let question_7=document.querySelector('.question7');
      question_6?.classList.remove('active');
      question_7?.classList.add('active');
      this. progressValue+=10;
    }
    question8(){
      let question_7=document.querySelector('.question7');
      let question_8=document.querySelector('.question8');
      question_7?.classList.remove('active');
      question_8?.classList.add('active');
      this. progressValue+=10;
    }
    question9(){
      let question_9=document.querySelector('.question9');
      let question_8=document.querySelector('.question8');
      question_8?.classList.remove('active');
      question_9?.classList.add('active');
      this. progressValue+=10;
    }
    question10(){
      let question_10=document.querySelector('.question10');
      let question_9=document.querySelector('.question9');
      question_9?.classList.remove('active');
      question_10?.classList.add('active');
      this. progressValue+=10;
      // console.log(this.ans);
    }

    result(){
      // this.progressValue+=10;
      let question_10=document.querySelector('.question10');
      let winner=document.querySelector('.winner');
      let loser=document.querySelector('.loser');
      let progress=document.querySelector('.progress');
      progress?.classList.remove('active');
      question_10?.classList.remove('active');
      
 
     if(this.ans>5){
        this.win=true;
        winner?.classList.add('active');
     }
     else{
      this.win=false;
      loser?.classList.add('active');
     }
    }
    correctans(){
      this.ans++;        
    }
   

    

}
