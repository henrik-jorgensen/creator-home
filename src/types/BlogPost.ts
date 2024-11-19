export interface BlogPost {
  title: string;
  brief: string;
  url: string;
  dateAdded: string;
  coverImage?: {
    url: string;
  };
  readTimeInMinutes: number;
} 