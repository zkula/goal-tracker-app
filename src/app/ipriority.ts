export interface IPriority {
    id: number,
    title: string,
    status: string,
    dateCreated: Date,
    targetCompletionDate: Date,
    description: string,
    category?: "health" | "work" | "mind" | "hobby",
    entries?: IEntries[]
      
}

interface IEntries {
  id: number,
  dateCreated: Date,
  description: string,
}