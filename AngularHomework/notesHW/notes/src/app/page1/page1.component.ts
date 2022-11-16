import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  myForm: any;
  constructor(private fb: FormBuilder, private shareservice: ShareService) {}

 formRes: any = [];

 selectedName:any;
 inputName='';
inputTextarea=''
currentSelected:any;
inputChanged=true;

  ngOnInit(): void {
    this.readlocal()
    this.myForm = this.fb.group({
      name: '',
      message: '',
    });
  }
  consoleRes() {
    let d=this.myForm.value;
    d.id=this.date();
    this.formRes.push(this.myForm.value);
    localStorage.setItem('saved', JSON.stringify(this.formRes));
    console.log(this.formRes)
    this.inputName=''
    this.inputTextarea=''
  }

  saveItemToLocal(){
    localStorage.setItem('saved', JSON.stringify(this.formRes));
    console.log('saveitemlocal trigger')
  }


  readlocal() {
    let localStorageData = JSON.parse(localStorage.getItem('saved') || '{}');
    this.formRes = localStorageData;
  }

  deleteBtn(name:any){
    let selectedId=name.target.value
    console.log(name.target.value)
    this.formRes=this.formRes.filter((e:any)=>{
      return e.id !=selectedId
    })
    this.saveItemToLocal()
  }

  date(){
   let d = +new Date().getTime().toString();
   return d;
  }

  postData(id1:any){
     this.selectedName=this.formRes.filter((e:any)=>{
      return e.id ==id1.target.id.toString()
    })
    this.inputName=this.selectedName[0].name;
    this.inputTextarea=this.selectedName[0].message
    this.currentSelected=this.selectedName[0].id
    this.inputChanged=true
  }

  Revert(){
    this.inputName=this.selectedName[0].name;
    this.inputTextarea=this.selectedName[0].message
    this.currentSelected=this.selectedName[0].id
    this.inputChanged=true;
  }
  addNote(){
    this.inputName=''
    this.inputTextarea=''
  }

  keyUpFn(){
this.inputChanged=false
return this.inputChanged;
  }


}
