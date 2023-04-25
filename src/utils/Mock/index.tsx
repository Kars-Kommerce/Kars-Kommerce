import { v4 as uuidv4 } from "uuid";

export interface IAdsAuthorProps {
  id: string;
  name: string;
  bio: string;
  is_advertiser: boolean;
}

export interface IAdvertisementResponseProps {
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
  author: IAdsAuthorProps;
  created_at: Date;
  updated_at: Date;
}

export const author: IAdsAuthorProps = {
  id: uuidv4(),
  name: "Lulu da Pomerania",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Nascetur ridiculus mus mauris vitae ultricies. Cursus mattis molestie a iaculis at erat. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Cras adipiscing enim eu turpis egestas. Phasellus faucibus scelerisque eleifend donec pretium. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus scelerisque eleifend donec pretium. Tincidunt arcu non sodales neque sodales. Ut etiam sit amet nisl purus in mollis nunc sed. Duis at tellus at urna condimentum.",
  is_advertiser: true,
};

export const mockedProduct: IAdvertisementResponseProps = {
  id: 1,
  title: "Maserati - Ghibli",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
  model:
    "Discover Ghibli, the elegant but sporty Maserati sedan: all about interior & exterior design, engine and performances, together with the latest innovations.",
  brand: "Maserati",
  year: 2013,
  fuel: 1,
  fuel_type: "Flex",
  is_active: true,
  price: 670000,
  author,
  created_at: new Date(),
  updated_at: new Date(),
};
