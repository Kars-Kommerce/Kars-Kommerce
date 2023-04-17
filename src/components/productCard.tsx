import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import UserCard from "./userCard";
import Tag from "./tag";

interface IAdsAuthorProps {
  id: string;
  name: string;
}

interface IAdvertisementResponseProps {
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

const mockedProduct: IAdvertisementResponseProps = {
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
  author: {
    id: uuidv4(),
    name: "Igor Torres",
  },
  created_at: new Date(),
  updated_at: new Date(),
};

const ProductCardContainer = styled.div`
  max-width: 312px;
  width: 100%;

  > div {
    :nth-child(1) {
      background-color: #e9ecef;
      padding: 0 25px;
      max-height: 152px;

      > img {
        width: 100%;
        height: 152px;
        object-fit: contain;
      }
    }

    :nth-child(2) {
      display: flex;
      flex-flow: column nowrap;
      gap: 16px;
      margin-top: 16px;

      > h3 {
        font-size: 16px;
        font-weight: bold;
      }

      > p {
        font-size: 14px;
      }

      > div {
        :nth-child(3) {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        :nth-child(4) {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }

  p,
  span {
    color: #495057;
  }
`;

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <div>
        <img src={"/car.png"} alt="car" />
      </div>
      <div>
        <h3>{mockedProduct.title}</h3>
        <p>{mockedProduct.description}</p>
        <UserCard authorName={mockedProduct.author.name} />
        <div>
          <Tag tags={[{ tag: "0 KM" }, { tag: mockedProduct.year }]} />
          <span>
            <strong>R$ {mockedProduct.price.toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;
