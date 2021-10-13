import { style } from "@angular/animations";
import { Component } from "@angular/core";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css'],
    styles: [`
        .online{
            color:white;
        }
    
    `]
})
export class ServerComponent{
    serverID: number=100;
    serverStatus:string='offline';

    constructor(){
        this.serverStatus=Math.random()>0.5?'online':'offline';

    }
    getColor(){
        return this.serverStatus=='online'? 'green':'red';
    }


}