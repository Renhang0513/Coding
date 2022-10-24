import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { filter,map } from 'rxjs';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:number,private shareService:ShareService,private matDialogRef:MatDialogRef<GreetingsComponent>) {
  } 
    currentSelectId:any
  ngOnInit(): void {
    this.currentSelectId=this.data;
    this.shareService.allPokemonsInfo$.subscribe(res=>{
      console.log(res);
      this.singleDisplay=res.filter((e:any)=>{
       return e.id == this.currentSelectId
      });
    })
  }
  //---Selected pokemon
singleDisplay:any=[];




  confirmPokemon():any{
let selectedID=this.currentSelectId;
this.shareService.filterFn(selectedID);
this.matDialogRef.close();
}
noThanksFn(){
  this.matDialogRef.close();
}
}
