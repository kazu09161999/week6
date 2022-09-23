import { Component, OnInit } from '@angular/core';
import {SocketService} from '../services/socket.service';
import { FormsModule } from '@angular/forms';
import {Message} from "./Class/message"
import { observable } from 'rxjs';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messagecontent:string ="";
  messages:string[] = [];
  ioConnection:any;

  constructor(private socketService: SocketService) { }

  ngOnInit(){
    this.initIoConnection();
  }

  initIoConnection(){
    // this.socketService.initSocket();
    this.socketService.getMessage().subscribe((message:any) =>{
      console.log(message);
      this.messages.push(message)

    });
  }
  chat(){
    if (this.messagecontent !=""){
      this.socketService.send(this.messagecontent);
      this.messagecontent="";
    } else{
      console.log("no message")
      this.messagecontent = ""
    }
  }


}















// import { Component, OnInit } from '@angular/core';
// import {SocketService} from '../services/socket.service';
// // import { FormsModule } from '@angular/forms';
// // import {Message} from "./Class/message"
// // import { observable } from 'rxjs';


// const SERVER_URL = "http://localhost:3000";
// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {
//   private socket;
//   messagecontent:string ="";
//   messages:string[] = [];
//   rooms = [];
//   roomslist:string = "";
//   roomnotice:string = "";
//   currentroom:string = "";
//   isinRoom=false;
//   newroom:string = "";
//   numusers:number =0;

//   constructor(private socketService: SocketService) { }

//   ngOnInit(): void {
//     this.socketService.initSocket();
//     this.socketService.getMessage((m)=>{this.messages.push(m)});
//     this.socketService.reqroomList();
//     this.socketService.getroomList((msg)=>{ this.rooms = JSON.parse(msg)});
//     this.socketService.notice((msg)=>{ this.roomnotice = msg});
//     this.socketService.joined((msg)=>{ this.currentroom = msg
//     if(this.currentroom != ""){
//       this.isinRoom = true;
//     }else{
//       this.isinRoom = false;
//     }
//   });
//   }

//   joinroom(){
//     this.socketService.joinroom(this.roomslist);
//     this.socketService.reqnumusers(this.roomslist);
//     this.socketService.getnumbers((res)=>{this.numusers = res});

//   }
//   clearnotice(){
//     this.roomnotice = "";
//   }
//   leaveroom(){
//     this.socketService.leaveroom(this.currentroom);
//     this.socketService.reqnumusers(this.currentroom);
//     this.socketService.getnumbers((res)=>{this.numusers = res});
//     this.roomslist = null;
//     this.currentroom = "";
//     this.isinRoom = false;
//     this.numusers = 0;
//     this.roomnotice = "";
//     this.messages = [];
//   }
//   createroom(){
//     console.log(this.createroom);
//     this.socketService.createroom(this.newroom);
//     this.socketService.reqroomList();
//     this.newroom = "";
//   }
//   chat(){
//     if(this.messagecontent){
//       this.socketService.sendMessage(this.messagecontent);
//     }else{
//       console.log("No message");
//     }
//   }

// }

