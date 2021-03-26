import { Injectable } from '@angular/core';
import { IPriority } from '../ipriority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  priorities: IPriority[] = [
    {
      id: 0,
      title: 'Learn Angular',
      status: 'Complete',
      dateCreated: new Date('2021-02-02'),
      targetCompletionDate: new Date('2021-03-25'),
      description: 'I am learning the Angular framework for front-end web development. Completion of this priority will be measured by completion of my personal project.',
      category: 'work',
      entries: [
        {
          id: 0,
          dateCreated: new Date('2021-02-10'),
          description: "Finished Pluralsight course 'Angular: Getting Started'. Learned about components, data binding, communication between components, pipes, services, dependency injection, and routing.",
        },
        {
          id: 1,
          dateCreated: new Date('2021-02-30'),
          description: "Finished Pluralsight course 'Angular Fundamentals'. Went more in depth here than the previous course, and learned additionally about Rxjs, unit testing, and deploying.",
        },
        {
          id: 2,
          dateCreated: new Date('2021-03-22'),
          description: "Completed Angular Bronze capability exam.",
        },
        {
          id: 3,
          dateCreated: new Date('2021-03-25'),
          description: "Completed a personal project to demonstrate my Angular skills.",
        },
      ]

    },
    {
      id: 1,
      title: 'Run Half Marathon 2021',
      status: 'In Progress',
      dateCreated: new Date('2021-01-10'),
      targetCompletionDate: new Date('2021-08-05'),
      description: 'I am training for the half marathon this year. I need to be able to run 13 miles by August to be ready. I will track my running progress in this priority.',
      category: 'health',
      entries: [
        {
          id: 0,
          dateCreated: new Date('2021-03-02'),
          description: 'Ran 5KM today. Pace was 6m/h.',
        },
        {
          id: 1,
          dateCreated: new Date('2021-03-08'),
          description: 'Ran 5KM today. Pace has improved to be 7.5m/h on average!',
        },
      ]

    },
    {
      id: 2,
      title: 'Read 20 books in 2021',
      status: 'In Progress',
      dateCreated: new Date('2021-03-01'),
      targetCompletionDate: new Date('2021-12-31'),
      description: 'My goal this year is to read 20 books. I will track my progress in the notes throughout the year.',
      category: 'mind',
      entries: [
        {
          id: 0,
          dateCreated: new Date('2021-03-02'),
          description: 'Finished reading Guns Germs and Steel today. This was a very interesting novel. It is about 600 pages long, and it took me 3 weeks to finish.',
        },
        {
          id: 1,
          dateCreated: new Date('2021-03-12'),
          description: 'Finished reading The Alchemist today. This was a nice short story that I enjoyed very much. It is a smaller novel, and only took a couple of days to read.',
        },
        {
          id: 2,
          dateCreated: new Date('2021-03-15'),
          description: 'Going to start reading Animal Farm by George Orwell.',
        },
      ]

    },
    {
      id: 3,
      title: 'Learn Everlong by Foo Fighters on the drums',
      status: 'Complete',
      dateCreated: new Date('2021-02-01'),
      targetCompletionDate: new Date('2021-03-04'),
      description: 'I want to be able to play Everlong by Foo Fighters on the drums. I will track my drumming sessions and progress in the notes.',
      category: 'hobby',
      entries: [
        {
          id: 0,
          dateCreated: new Date('2021-02-03'),
          description: 'Finished learning the first verse',
        },
        {
          id: 1,
          dateCreated: new Date('2021-03-08'),
          description: 'Finished learning the chorus',
        },
        {
          id: 2,
          dateCreated: new Date('2021-03-15'),
          description: 'Finished learning the song, but still cannot play at full tempo',
        },
      ]

    },
    
  ];

  getPriorities() {
    return this.priorities;
  }

  addPriority(priority: IPriority) {
    this.priorities.push(priority);
    console.log(this.priorities);
  }

  markComplete(id: number){
    let index = this.priorities.findIndex(priority => {if(priority.id === id){return true}});
    this.priorities[index].status = 'Complete';
    console.log(this.priorities[index])
  }

  updateNote(id: number, note: string){
    console.log('priorities: ', this.priorities)
    let index = this.priorities.findIndex(priority => {if(priority.id === id){return true}});
    //search priorities, update property indicated
    // let newPriority: IPriority = this.priorities.find(priority => priority.id === id);
    console.log('id: ', id, "note: ", note);
    let noteId = this.priorities[index].entries? this.priorities[index].entries.length : 0;
    this.priorities[index].entries.push({
      id: noteId,
      dateCreated: new Date(),
      description: note,
    });
    console.log(this.priorities[index])
  }

  deletePriority(id:number){
    console.log("deleting id ", id, ". Curruent priorities: ", this.priorities);
    this.priorities = this.priorities.filter(priority => priority.id !== id);
    console.log("new priorities: ", this.priorities);
  }

}
