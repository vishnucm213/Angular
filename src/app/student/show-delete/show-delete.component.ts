import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent {

  constructor(private service:SharedService){}

  StudentList:any=[];

  ngOnInit():void{
    this.refreshStudList();
  }

  refreshStudList(){
    this.service.getStudentList().subscribe(data=>{
      this.StudentList=data
    })
  }

}
