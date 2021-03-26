import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { IPriority } from '../ipriority';
import { PriorityService } from '../services/priority.service';

@Component({
  selector: 'app-add-priority',
  templateUrl: './add-priority.component.html',
  styleUrls: ['./add-priority.component.css']
})
export class AddPriorityComponent implements OnInit {

  constructor(private priorityService: PriorityService, private router: Router) {}

  priorityForm:FormGroup;
  private title: FormControl;
  private description: FormControl;
  private targetCompletionDate: FormControl

  ngOnInit(): void {
    this.title = new FormControl('',Validators.required);
    this.targetCompletionDate = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);

    this.priorityForm = new FormGroup({
      title: this.title,
      targetCompletionDate: this.targetCompletionDate,
      description: this.description,
    })
  }


  validateTitle() {
    return this.title.valid || this.title.untouched
  }

  validateDescription() {
    return this.description.valid || this.description.untouched
  }

  validateTargetDate() {
    return this.targetCompletionDate.valid || this.targetCompletionDate.untouched
  }


  savePriority(formValues) {
    if(this.priorityForm.valid){
      console.log("form values: ", formValues)
      let length = this.priorityService.getPriorities().length;
      console.log ("length: ", length)
      let newPriority: IPriority = {
        id: length,
        title: formValues.title,
        status: 'In Progress',
        dateCreated: new Date(),
        targetCompletionDate: new Date(formValues.targetCompletionDate),
        description: formValues.description,
        entries: [],
      }
      this.priorityService.addPriority(newPriority);
      this.router.navigate(['dashboard']);
    }
    else {
      alert('Form is incomplete!')
    }
    
  }

  exitForm(){
    this.router.navigate(['dashboard']);
  }

}

