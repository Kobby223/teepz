import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
let image = require("./images/blogcity.jpg");
let city = require("./images/city.jpg");
let woman = require("./images/woman.jpg");
let nigeria = require("./images/nigeria.jpg");
let hand = require("./images/hand.jpg");
let hat = require("./images/hat.jpg");
let people = require("./images/people.jpg");
const Blog = () => {
  return (
    <BlogMain>
      <BlogHeader>
        <HeaderImage className="HeaderImage" src={image} alt="" />
        <NewsDetailed>
          <FeaturedArtical>FEATURED ARTICAL</FeaturedArtical>
          <HeaderText>
            <ParaHeader>Lorem ipsum dolor sit amet, consecteturls</ParaHeader>
            <ParaContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </ParaContent>
            <Date>
              <DateMonth>June 20th</DateMonth>
              <Ellipse />
              <MinRead>4 min read</MinRead>
            </Date>
          </HeaderText>
        </NewsDetailed>
      </BlogHeader>
      <CategoryyBlog>
        <CategoryHead>
          <CategoryFrame>
            <CategoryOne>Category 1</CategoryOne>
            <CategoryOne>Category 1</CategoryOne>
            <CategoryOne>Category 1</CategoryOne>
            <CategoryOne>Category 1</CategoryOne>
            <CategoryOne>Category 1</CategoryOne>
            <CategoryOne>Category 1</CategoryOne>
          </CategoryFrame>
        </CategoryHead>
        <AutoGroup>
          <CategorizedBlog>
            <CategorizedBlogHeader>Category 1</CategorizedBlogHeader>
            <AutoGroupFrame>
              <Body>
                <Card>
                  <BlogImage src={nigeria} alt="" />
                  <CardDetail>
                    <CardText>
                      Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                    </CardText>
                    <CardDate>
                      <CardDateText>June 20th</CardDateText>
                      <CardAutoGroup>
                        <CardEcllipse></CardEcllipse>
                        <CardMinRead>4 min read</CardMinRead>
                      </CardAutoGroup>
                    </CardDate>
                  </CardDetail>
                </Card>
                <Card>
                  <BlogImage src={city} alt="" />
                  <CardDetail>
                    <CardText>
                      Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                    </CardText>
                    <CardDate>
                      <CardDateText>June 20th</CardDateText>
                      <CardAutoGroup>
                        <CardEcllipse></CardEcllipse>
                        <CardMinRead>4 min read</CardMinRead>
                      </CardAutoGroup>
                    </CardDate>
                  </CardDetail>
                </Card>
                <Card>
                  <BlogImage src={woman} alt="" />
                  <CardDetail>
                    <CardText>
                      Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                    </CardText>
                    <CardDate>
                      <CardDateText>June 20th</CardDateText>
                      <CardAutoGroup>
                        <CardEcllipse></CardEcllipse>
                        <CardMinRead>4 min read</CardMinRead>
                      </CardAutoGroup>
                    </CardDate>
                  </CardDetail>
                </Card>
              </Body>
              <Body>
                <Card>
                  <BlogImage src={hand} alt="" />
                  <CardDetail>
                    <CardText>
                      Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                    </CardText>
                    <CardDate>
                      <CardDateText>June 20th</CardDateText>
                      <CardAutoGroup>
                        <CardEcllipse></CardEcllipse>
                        <CardMinRead>4 min read</CardMinRead>
                      </CardAutoGroup>
                    </CardDate>
                  </CardDetail>
                </Card>
                <Card>
                  <BlogImage src={people} alt="" />
                  <CardDetail>
                    <CardText>
                      Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                    </CardText>
                    <CardDate>
                      <CardDateText>June 20th</CardDateText>
                      <CardAutoGroup>
                        <CardEcllipse></CardEcllipse>
                        <CardMinRead>4 min read</CardMinRead>
                      </CardAutoGroup>
                    </CardDate>
                  </CardDetail>
                </Card>
                <Card>
                  <BlogImage src={hat} alt="" />
                  <CardDetail>
                    <CardText>
                      Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                    </CardText>
                    <CardDate>
                      <CardDateText>June 20th</CardDateText>
                      <CardAutoGroup>
                        <CardEcllipse></CardEcllipse>
                        <CardMinRead>4 min read</CardMinRead>
                      </CardAutoGroup>
                    </CardDate>
                  </CardDetail>
                </Card>
              </Body>
            </AutoGroupFrame>
          </CategorizedBlog>
        </AutoGroup>
      </CategoryyBlog>
      <Pages>
        <PagesChevron>
          <FiChevronLeft />
        </PagesChevron>
        <PagesAutoGroup>1</PagesAutoGroup>
        <PagesAutGroupItem>2</PagesAutGroupItem>
        <PagesAutGroupItem>3</PagesAutGroupItem>
        <PagesAutGroupItem>4</PagesAutGroupItem>
        <PagesAutGroupItem>5</PagesAutGroupItem>
        <PagesAutGroupItemDash>...</PagesAutGroupItemDash>
        <PagesAutGroupItem>10</PagesAutGroupItem>
        <PagesChevron>
          <FiChevronRight />
        </PagesChevron>
      </Pages>
    </BlogMain>
  );
};

const BlogMain = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  width: 100%;
`;
const BlogHeader = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.0399999991),
    0 0.2rem 0.6rem rgba(0, 0, 0, 0.0399999991),
    0 1rem 2rem rgba(0, 0, 0, 0.0399999991);
  cursor: pointer;
  flex-shrink: 0;
  height: 30rem;
  margin: 7rem 9.75rem;
  overflow: hidden;
  position: relative;
  width: calc(100% - 19.5rem);
  //   padding: 0 3%;
`;
const NewsDetailed = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 100%;
  padding: 7.85rem 5.9rem 7.85rem 4rem;
  width: 64rem;
`;
const HeaderImage = styled.img`
  flex-shrink: 0;
  height: 30rem;
  object-fit: cover;
  vertical-align: top;
  width: 30rem;
  border-radius: 0.4rem;
`;
const FeaturedArtical = styled.p`
  color: #252b3b;
  //   font-family: Poppins, 'Source Sans Pro';
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1.2rem;
  white-space: nowrap;
  text-align: start;
`;
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  text-align: start;
`;
const ParaHeader = styled.p`
  color: #fd5981;
  flex-shrink: 0;
  // font-family: Poppins, 'Source Sans Pro';
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  //   max-width: 54.1rem;
  max-width: 23rem;
`;
const ParaContent = styled.p`
  color: rgba(37, 43, 59, 0.6000000238);
  flex-shrink: 0;
  //   font-family: Inter, "Source Sans Pro";
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 2;
  max-width: 25rem;
  //   margin-right: 20px;
`;
const Date = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: flex;
  flex-shrink: 0;
`;
const DateMonth = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2125;
  white-space: nowrap;
`;
const Ellipse = styled.div`
  background-color: #252b3b;
  border-radius: 0.3rem;
  flex-shrink: 0;
  height: 0.6rem;
  width: 0.6rem;
  margin-top: -12px;
`;
const MinRead = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
`;
const CategoryyBlog = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 10rem;
  width: calc(100% - 20rem);
`;
const CategoryHead = styled.div`
  border: solid 0.1rem #252b3b;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 4rem;
  padding: 1.1rem 11.6rem 0 11.6rem;
  width: 100%;
`;
const CategoryFrame = styled.div`
  align-items: center;

  column-gap: 2rem;
  display: flex;
  height: 100%;
  width: 100%;
`;
const CategoryOne = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  white-space: nowrap;
`;
const AutoGroup = styled.div`
  align-items: start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 5rem 2rem 0rem 2rem;
  width: 100%;
`;
const CategorizedBlog = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 5rem;
  width: 100%;
`;
const CategorizedBlogHeader = styled.div`
  border: solid 0.1rem #252b3b;
  box-sizing: border-box;
  color: #252b3b;
  flex-shrink: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1rem 0.5rem;
  white-space: nowrap;
  width: 100%;
  text-align: start;
`;
const AutoGroupFrame = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 2rem 1rem 0rem 1rem;
  width: 100%;
`;
const Body = styled.div`
  align-items: center;
  column-gap: 2rem;
  display: flex;
  flex-shrink: 0;
  height: 20rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;
const Card = styled.div`
  // align-items: center;
  text-align: start;
  background-color: #ffffff;
  border: solid 0.02rem #fd5981;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.0399999991),
    0 0.2rem 0.6rem rgba(0, 0, 0, 0.0399999991),
    0 1rem 2rem rgba(0, 0, 0, 0.0399999991);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  padding-bottom: 3.1rem;
  width: 15rem;
`;
const BlogImage = styled.img`
  border-radius: 0.4rem 0.4rem 0 0;
  flex-shrink: 0;
  height: 10rem;
  margin-bottom: 0.8rem;
  object-fit: cover;
  vertical-align: top;
  width: 15rem;
`;
const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0rem 1rem 0rem 1rem;
  width: calc(100% - 4.3rem);
`;
const CardText = styled.div`
  color: #4f4f4f;
  display: flex;
  flex-shrink: 0;
  font-family: Poppins, "Source Sans Pro";
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1.3rem;
  max-width: 33.7rem;
`;
const CardDate = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 2.1rem;
  margin-right: 17.4rem;
  width: calc(100% - 17.4rem);
`;
const CardDateText = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
`;
const CardAutoGroup = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: 100%;
  padding-left: 0.5rem;
`;
const CardEcllipse = styled.div`
  background-color: rgba(79, 79, 79, 0.6000000238);
  border-radius: 0.3rem;
  flex-shrink: 0;
  height: 0.6rem;
  margin-right: 0.5rem;
  width: 0.6rem;
  margin-top: -14px;
`;
const CardMinRead = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
`;
const Pages = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: solid 0.05rem #ffffff;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.0700000003);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  height: 4.4rem;
  // margin: 0 39.6rem;
  padding: 1rem 2.95rem 0.9rem 2.95rem;
  width: calc(100% - 79.2rem);
`;
const PagesAutoGroup = styled.div`
  align-items: center;
  background-color: #fd5981;
  border-radius: 0.2rem;
  color: #ffffff;
  display: flex;
  flex-shrink: 0;
  font-size: 1rem;
  font-weight: 400;
  height: 100%;
  justify-content: center;
  line-height: 1.4000000272;
  margin-right: 2rem;
  white-space: nowrap;
  width: 2rem;
`;
const PagesAutGroupItem = styled.p`
  color: #4f4f4f;
  flex-shrink: 0;
  font-family: Inter, "Source Sans Pro";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4000000272;
  margin: 0.1rem 3.1rem 0rem 0rem;
  white-space: nowrap;
`;
const PagesAutGroupItemDash = styled.p`
  color: #fd5981;
  flex-shrink: 0;
  font-family: Inter, "Source Sans Pro";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4000000272;
  margin: 0rem 3.2rem 0.5rem 0rem;
  white-space: nowrap;
`;
const PagesChevron = styled.p`
  flex-shrink: 0;
  height: 1.3001rem;
  margin: 0rem 2.45rem 0.1rem 0rem;
  object-fit: contain;
  vertical-align: top;
  width: 0.7002rem;
  color: #4f4f4f;
`;

export default Blog;
