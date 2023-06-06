import { Client } from "./client";

export class Reservation {
    _id?: string;
    nomcm!: string;
    qcm!: number;
    numtel!: number; 
    desc!: string;
    client!:Client
  
   
  }