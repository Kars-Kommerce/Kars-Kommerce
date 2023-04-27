import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import UserCard from "../UserCard";
import Tag from "../Tag";

interface IProdctCardProps {
  product: IAdvertisementResponse;
}
interface IAdsAuthor {
  id: string;
  name: string;
  bio: string;
  is_advertiser: boolean;
}

interface IAdvertisementResponse {
  id: number;
  author: IAdsAuthor;
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
  created_at: Date;
  updated_at: Date;
}

const ProductCardContainer = styled.div`
  max-width: 312px;
  min-width: 312px;

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

const ProductCard = ({ product }: IProdctCardProps) => {
  return (
    <ProductCardContainer>
      <div>
        <img src={"/car.png"} alt="car" />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <UserCard authorName={product.author.name} />
        <div>
          <Tag tags={[{ tag: "0 KM" }, { tag: product.year }]} />
          <span>
            <strong>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </span>
        </div>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;
