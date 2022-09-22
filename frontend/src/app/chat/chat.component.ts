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
  messagecontent:string =""
  messages:Message[] = [];
  ioConnection:any;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection()
  }

  initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.getMessage()
    .subscribe((message:any) =>{
      this.messages.push(message)
      console.log(message)
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
