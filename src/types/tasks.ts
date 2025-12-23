export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export interface NewTask {
    text: string;
}

export interface UpdatedTask {
    text?:string;
    completed?: boolean;
}