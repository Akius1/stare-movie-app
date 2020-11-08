export type userType = {
  email: string;
  name: string;
  password: string;
};

export type filmType = {
  name: string;
  description: string;
  release_date: string;
  ticket_price: number;
  country: string;
  genre: string;
  image_links: string;
};
export type commentType = {
  name: string;
  Film_id: string;
  comment: string;
  user_id: number;
};
