export interface Comment {
  id?: number;
  created?: string;
  modified?: string;
  subject: string;
  body: string;
  status: string;
  rating: number;
  user: string;
  consultant: number;
}
