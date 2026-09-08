export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  testimonial?: {
    name: string;
    quote: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
};

export type User = {
    email: string
    name: string
    role: "admin" | "member"
}
