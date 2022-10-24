import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-selectd-dialog',
  templateUrl: './selectd-dialog.component.html',
  styleUrls: ['./selectd-dialog.component.css']
})
export class SelectdDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:number,private shareService:ShareService,private matDialogRef:MatDialogRef<SelectdDialogComponent>) {
  } 
  currentSelectId:any
  ngOnInit(): void {
    this.currentSelectId=this.data;
    this.shareService.allPokemonsInfo$.subscribe(res=>{
      this.singleDisplay=res.filter((e:any)=>{
       return e.id == this.currentSelectId
      });
    })
  }
  //---Selected pokemon
singleDisplay:any=[];


confirmPokemon():any{
let selectedID=this.currentSelectId;
this.shareService.unselectPokemon(selectedID);
this.matDialogRef.close();
}
noThanksFn(){
  this.matDialogRef.close();
}
}