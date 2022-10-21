import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  constructor(private ShareService:ShareService) { }
  wishlistDisplay=[]

  ngOnInit(): void {
    this.ShareService.obsof1.subscribe(data=>{
      this.wishlistDisplay=data
    })
  }
  deleteWish(name:any){
    let deleteName=name.target.value
  this.ShareService.removeWishFn(deleteName)
  }


}