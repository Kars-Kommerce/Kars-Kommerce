import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
  gap: 12px;

  > span {
    padding: 4px 8px;
    background-color: #edeafd;
    color: #4529e6 !important;
  }
`;

interface TagsProps {
  tag: string | number;
  href?: string;
}

interface ITagProps {
  tags: TagsProps[];
}

const Tag = ({ tags }: ITagProps) => {
  return (
    <TagContainer>
      {tags.map((el, i) => {
        return (
          <>
            <span key={`${el.tag}-${i}`}>{el.tag}</span>
          </>
        );
      })}
    </TagContainer>
  );
};

export default Tag;
