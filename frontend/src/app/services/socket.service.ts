import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
//problem below
import {io} from 'socket.io-client';
import {Message} from "../chat/Class/message"



const SERVER_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any
  constructor() { }

  initSocket(){
    this.socket = io(SERVER_URL);
    return ()=>{this.socket.disconnect();}
  }
  send(message:Message){
    this.socket.emit('message',message);
  }

  getMessage(){

      let observable = new Observable(observer=>{

        // this.socket.on('message', (data:Message) => observer.next(data));
        this.socket.on('message', (data:Message) => observer.next(data));


    });

    return observable;

    }
}
