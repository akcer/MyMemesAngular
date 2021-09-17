interface Meme {
  _id: string;
  topTitle: string;
  bottomTitle: string;
  text: string;
  likes: Likes;
  dislikes: Dislikes;
  image: string;
  author: User;
  createdAt: string;
  updatedAt?: string;
}
interface Likes {
  likesCount: number;
  likes: string[];
}
interface Dislikes {
  dislikesCount: number;
  dislikes: string[];
}
interface User {
  _id?: string;
  username?: string;
  avatar?: string;
  role?: string;
  password?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Comment {
  _id: string;
  text: string;
  author: User;
  createdAt?: string;
  updatedAt?: string;
}
