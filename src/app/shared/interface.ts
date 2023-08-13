export interface Question {
    id: number;
    date: Date;
    name: string;
    email: string;
    phone: string;
    message: string
}

export interface Info {
    about: string;
}

export interface Order {
    id?: number;
    data?: number;
    name: string;
    phone: string;
}

export interface EducationOrder {
    id: number;
    data: Date;
    name: string;
    phone: string;
    comment: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Collection{
    img: ImageBitmap;
    name: string; 
    description: string
}