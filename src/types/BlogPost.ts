export interface BlogPost {
  title: string;
  url: string;
  dateAdded: string;
  coverImage?: {
    url: string;
  };
  readTimeInMinutes: number;
} 