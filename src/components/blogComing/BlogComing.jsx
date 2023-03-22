import styled from "styled-components";
import ErrorPageIcon from "./images/ErrorPage.svg";

const BlogComing = () => {
  return (
    <BlogCominn>
      <BlogCominnFrame>
        <BlogCoinnImage src={ErrorPageIcon} alt="" />
        <BlogCoinnContent>
          <BlogCoinnContentPara>BLOG</BlogCoinnContentPara>
          <BlogCoinnContentParaa>COMING</BlogCoinnContentParaa>
          <BlogCoinnContentParaaa>SOON!</BlogCoinnContentParaaa>
        </BlogCoinnContent>
      </BlogCominnFrame>
    </BlogCominn>
  );
};
const BlogCominn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
`;
const BlogCominnFrame = styled.div`
  align-items: center;
  display: flex;
  height: 25rem;
  gap: 20px;
  padding: 0 5%;
  width: 50rem;
  background: #fbfbfb;
  box-shadow: -4px 4px 12px rgba(118, 5, 32, 0.08);
`;
const BlogCoinnImage = styled.img`
  flex-shrink: 0;
  //   height: 8.0007rem;
  margin-right: 0.9999rem;
  object-fit: contain;
  position: relative;
  vertical-align: top;
  width: 17.5003rem;
`;
const BlogCoinnContent = styled.div`
  flex-shrink: 0;
  height: calc(100% - 10.5rem);
  margin: 3.25rem 0;
  position: relative;
  width: 17.7rem;
  display: flex;
  flex-direction: column;
`;
const BlogCoinnContentPara = styled.p`
  color: #fd5981;
  font-size: 3.9825rem;
  font-weight: 500;
  //   height: 13.5rem;
  left: 7.05rem;
  line-height: 1.5;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 15.7rem;
`;
const BlogCoinnContentParaa = styled.p`
  color: #fd5981;
  font-size: 3.9825rem;
  font-weight: 500;
  height: 13.5rem;
  left: 7.05rem;
  line-height: 1.5;
  position: absolute;
  top: 5rem;
  white-space: nowrap;
  width: 15.7rem;
`;
const BlogCoinnContentParaaa = styled.p`
  color: #fd5981;
  font-size: 3.9825rem;
  font-weight: 500;
  height: 13.5rem;
  left: 7.05rem;
  line-height: 1.5;
  position: absolute;
  top: 10rem;
  white-space: nowrap;
  width: 15.7rem;
`;
export default BlogComing;
