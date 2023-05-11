import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserCardContainer = styled.div`
  > div {
    width: 32px;
    height: 32px;
    background-color: #4529e6;
    color: #fff;
    font-size: 14px;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > span {
    font-weight: 600;
    cursor: pointer;
  }
`;

interface UserCardProps {
  authorName: string;
  authorID: string;
}

const UserCard = ({ authorName, authorID }: UserCardProps) => {
  const navigate = useNavigate();
  const abbreviateName = () => {
    const splited = authorName.split(" ");

    if (splited.length > 1) return `${splited[0][0]}${splited[1][0]}`;

    return `${splited[0][0]}`;
  };

  return (
    <UserCardContainer>
      <div onClick={() => navigate(`/user/${authorID}`)}>
        {abbreviateName()}
      </div>
      <span onClick={() => navigate(`/user/${authorID}`)}>{authorName}</span>
    </UserCardContainer>
  );
};

export default UserCard;
