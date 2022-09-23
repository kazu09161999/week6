import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
//problem below
import {io} from 'socket.io-client';
//import {Message} from "../chat/Class/message"



const SERVER_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any
  constructor() {
    this.socket = io(SERVER_URL);
   }


  send(message:any){
    this.socket.emit('message',message);
  }

  getMessage(){

      return new Observable(observer=>{

        // this.socket.on('message', (data:Message) => observer.next(data));
        this.socket.on('message', (data:string) => observer.next(data));


    });



    }
}


// import { Injectable } from '@angular/core';
// import * as io from 'socket.io-client';
// import {nextTick} from 'q';
// //problem below

// const SERVER_URL = "http://localhost:3000/chat";

// @Injectable({
//   providedIn: 'root'
// })
// export class SocketService {
//   private socket;
//   constructor() { }

//   initSocket(): void{
//     this.socket = io(SERVER_URL);
//   }

//   joinroom(selroom): void{
//     this.socket.emit('joinRoom',selroom);
//   }

//   leaveroom(selroom):void{
//     this.socket.emit("leaveRoom", selroom);
//   }

//   joined(next){
//     this.socket.on('joined', res=>next(res));
//   }

//   createroom(newroom){
//     this.socket.emit('newroom', newroom);
//   }

//   reqnumusers(selroom){
//     this.socket.on('numusers', res=>nextTick(res));
//   }

//   reqroomList(){
//     this.socket.emit('roomlist', 'list please');
//   }

//   getroomList(next){
//     this.socket.on('roomlist', res=>next(res));
//   }

//   notice(next){
//     this.socket.on('notice', res=>next(res));
//   }

//   sendMessage(message: string): void {
//     this.socket.emit('message', message);
//   }

//   getMessage(next){
//     this.socket.on('message', (message)=>next(message));
//   }

// }



