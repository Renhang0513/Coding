import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { MatDialog } from '@angular/material/dialog'
import { SelectdDialogComponent } from '../selectd-dialog/selectd-dialog.component';
@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {

  constructor(private shareService:ShareService,private matDialog:MatDialog) { }
  selectedPokemons:any=[]

  ngOnInit(): void {
    this.shareService.selectedPokemon$.subscribe(data=>{
      this.selectedPokemons=data;
    })
  }

  onOpenDialogClick(id:any){
    console.log(this.shareService.serverPokemonData);
    console.log(id.target.value);
  this.matDialog.open(SelectdDialogComponent,{
    data:id.target.value,
  })
  }

}
