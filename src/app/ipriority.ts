export interface IPriority {
    id: number,
    title: string,
    status: string,
    dateCreated: Date,
    targetCompletionDate: Date,
    description: string,
    entries?: IEntries[]
      
}

interface IEntries {
  id: number,
  dateCreated: Date,
  description: string,
}