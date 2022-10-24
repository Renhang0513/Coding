import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { MatDialog } from '@angular/material/dialog'
import { GreetingsComponent } from '../greetings/greetings.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons:any=[]
  constructor(private shareService:ShareService,private matDialog:MatDialog) { 

  }
//--res from server



  ngOnInit(): void {
    this.shareService.serverLive$.subscribe(res=>{
      this.pokemons=res;
    })

    
  }

//----Angular dialog
onOpenDialogClick(id:any){
  console.log(this.shareService.serverPokemonData);
  console.log(id.target.value);
this.matDialog.open(GreetingsComponent,{
  data:id.target.value,
})
}

}

