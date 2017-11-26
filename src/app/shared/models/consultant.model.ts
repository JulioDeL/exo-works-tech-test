import { Comment } from './comment.model';

export interface Consultant {
  id: number;
  comments: Comment[];
  created: string;
  modified: string;
  uuid: string;
  email: string;
  short_name: string;
  full_name: string;
  date_joined: string;
  status: string;
  gender: string;
  short_me: string;
  location: string;
  profile_picture: string;
}
