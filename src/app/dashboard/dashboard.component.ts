import { Component, OnChanges, OnInit } from '@angular/core';
import { IPriority } from '../ipriority';
import { PriorityService } from '../services/priority.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  priorities: IPriority[];
  clickedId: number;
  orderBy: string = 'dateCreated';
  filteredPriorities: IPriority[];
  chosenPriority: IPriority ;  //if priority is chosen, the priority details will display on the right side


  constructor(private priorityService: PriorityService) { }

  ngOnInit(): void {
    //get priorites from service
    this.priorities = this.priorityService.getPriorities();
    this.filteredPriorities = [...this.priorities];
    console.log("oninit filteredP: ",this.filteredPriorities)
    this.filteredPriorities.sort(sortByDateCreated);
    console.log("oninit filteredP Ordered: ",this.filteredPriorities)
  }

  ngOnChanges():void {

  }

  filterPriorities(value){
    //this.filterBy = value; // value will be 'all', 'in progress', or 'complete'
    console.log("value: ", value, this.filteredPriorities)
    if(value !== 'all'){
      this.filteredPriorities = this.priorities.filter(priority => priority.status === value);
      this.sortPriorities(this.orderBy);
    }
    else {
      this.filteredPriorities = [...this.priorities];
      this.sortPriorities(this.orderBy);
    }
    
  }

  sortPriorities(value) {
    this.orderBy = value;
    if(value === 'status'){
      this.filteredPriorities.sort(sortByStatus)
    }
    else if(value === 'dateCreated'){
      this.filteredPriorities.sort(sortByDateCreated)
    }
    else if(value === 'targetCompletionDate'){
      console.log("filteredP: ", this.filteredPriorities)
      this.filteredPriorities.sort(sortByTargetDate)
      console.log("filteredP after: ", this.filteredPriorities)
    }
    else {
      console.log('default chosen')
      this.filteredPriorities = [...this.priorities];

    }
  }


  priorityClicked(priority: IPriority){
    
    if (this.chosenPriority?.id === priority.id){
      this.chosenPriority = null;
      this.clickedId = null;
    } 
    else {
      this.chosenPriority = priority;
      this.clickedId = priority.id;
    }
  }

  

}


function sortByStatus(p1: IPriority, p2: IPriority ){
  if (p1.status < p2.status) return 1;
  else if (p1.status === p2.status) return 0;
  else return -1;
}

function sortByDateCreated (p1: IPriority, p2: IPriority ){
  if (p1.dateCreated < p2.dateCreated) return 1;
  else if (p1.dateCreated === p2.dateCreated) return 0;
  else return -1;
}

function sortByTargetDate (p1: IPriority, p2: IPriority ){
  if (p1.targetCompletionDate > p2.targetCompletionDate) return 1;
  else if (p1.targetCompletionDate === p2.targetCompletionDate) return 0;
  else return -1;
}