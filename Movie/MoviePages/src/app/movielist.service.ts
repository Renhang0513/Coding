import { Injectable } from '@angular/core';
import { of,observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  constructor() { }



//--test area

//=-----


  movieLists(){
    const getLists = [
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'},
      {title:'Fear Street', 
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654862502-best-horror-movies-on-netflix-fear-street-1654862476.jpg',
      id:1,
      year:'2020'}
    ];
    return getLists;
  }
}
