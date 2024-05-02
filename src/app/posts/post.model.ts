export interface Post{
  _id?: string;
  title: string;
  content: string;
  date: Date;
  tasks: Task[]
}

export interface Task {
  description: string;
  completed: boolean;
}
