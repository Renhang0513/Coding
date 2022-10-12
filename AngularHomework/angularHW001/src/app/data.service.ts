import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getLists(){
    const getLists = [
      {header:'Learning Angular is ?', 
      description:'The NVIDIA® GeForce RTX® 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create.',
      id:1,
      color:'blue'},
      {header:'Learning Angular is ?', 
      description:'The NVIDIA® GeForce RTX® 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create.',
      id:2,
      color:'black'},    
      {header:'Learning Angular is ?', 
      description:'The NVIDIA® GeForce RTX® 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create.',
      id:3,
      color:'red'},
      {header:'Learning Angular is ?', 
      description:'The NVIDIA® GeForce RTX® 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create.',
      id:4,
      color:'green'}
    ];
    return getLists;
  }
}
