import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPriority } from '../ipriority';
import { PriorityService } from '../services/priority.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  @Input() priority:IPriority;
  @Output() return: EventEmitter<boolean> = new EventEmitter();
  newNote: boolean = false;
  noteValue: string;

  constructor(private priorityService: PriorityService, private router: Router) { }

  ngOnInit(): void {
  }

  addNoteClicked(){
    this.newNote = true;
  }

  addNote() {
    console.log(this.noteValue);
    let id = this.priority.id;
    // add service and pass in noteValue
    this.priorityService.updateNote(id,this.noteValue);
    this.newNote = false;
    this.noteValue = null;
  }

  markComplete() {
    this.priorityService.markComplete(this.priority.id);
  }

  goBack() {
    this.return.emit(true);
  }

  deletePriority() {
    if (confirm("Are you sure you want to delete this priority?")){
      let id = this.priority.id;
      console.log("deleting priority: ", id, this.priority);
      this.priorityService.deletePriority(id);
      this.router.navigateByUrl('/new', { skipLocationChange: true }).then(() => {
        this.router.navigate(['dashboard']);
      });
     
      // this.return.emit(true);
    }
    
  }

}
