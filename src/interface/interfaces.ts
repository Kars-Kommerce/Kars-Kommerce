export interface IAdvertisement {
  id: number;
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
  authorId: string;
  created_at: Date;
  updated_at: Date;
}
