import styled from "styled-components";
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";

let image = require("./images/blogcity.jpg");

const BlogPage = () => {
  return (
    <BlogContainer>
      <HeaderImage src={image} alt="" />
      <Frame>
        <FrameLeft>
          <FrameLinks>
            <FrameLinksText>Share</FrameLinksText>
            <FrameLinksIcons>
              <FrameLinksIcon>
                <GrInstagram />
              </FrameLinksIcon>
              <FrameLinksIcon>
                <GrLinkedinOption />
              </FrameLinksIcon>
              <FrameLinksIcon>
                <GrTwitter />
              </FrameLinksIcon>
              <FrameLinksIcon>
                <GrFacebookOption />
              </FrameLinksIcon>
            </FrameLinksIcons>
          </FrameLinks>
          <SubRegion>
            <BlogTitle>
              <CardDate>
                <CardDateText>June 20th</CardDateText>
                <CardAutoGroup>
                  <CardEcllipse></CardEcllipse>
                  <CardMinRead>4 min read</CardMinRead>
                </CardAutoGroup>
              </CardDate>
              <BlogTitlleHead>
                Lorem ipsum dolor sit amet, cone um dolor
              </BlogTitlleHead>
            </BlogTitle>
            <BlogContent>
              <BlogContentGroup>
                <BlogContentPara>
                  <BlogContentParaSub weight="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex eaLorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempe-m
                    dolor sit amet, consecteeiusmod tempe- Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex eaLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempe-m dolor sit amet,
                    consecteeiusmod tempe-
                    <br />
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex eaLorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempe-m
                    dolor sit amet, consecteeiusmod tem
                    <br />
                  </BlogContentParaSub>
                  <BlogContentParaSub weight="400">
                    <br />
                    <br />
                  </BlogContentParaSub>
                  <BlogContentParaSub weight="600">
                    Lorem ipsum dolor sit amet, cone um dolor
                    <br />
                    <br />
                  </BlogContentParaSub>
                  <BlogContentParaSub weight="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex eaLorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempe-m
                    dolor sit amet, consecteeiusmod tempe-
                    <br />
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex eaLorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempe-m
                    dolor sit amet, consecteeiusmod tempe-
                    <br />
                  </BlogContentParaSub>
                  <BlogContentParaSub weight="400">
                    <br />
                  </BlogContentParaSub>
                  <BlogContentParaSub weight="600">
                    Lorem ipsum dolor sit amet, cone um dolor
                    <br />
                    <br />
                  </BlogContentParaSub>
                  <BlogContentParaSub weight="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex eaLorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempe-m
                    dolor sit amet, consecteeiusmod tempe-
                  </BlogContentParaSub>
                </BlogContentPara>
                <BlogImage src={image} alt="" />
              </BlogContentGroup>
              <BlogContentParagragh>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex eaLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempe-m dolor sit amet,
                consecteeiusmod tempe-
                <br />
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex eaLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempe-m dolor sit amet,
                consecteeiusmod tempe-
              </BlogContentParagragh>
            </BlogContent>
          </SubRegion>
        </FrameLeft>
        <FrameRight>
          <FrameArticle>
            <PopularArticle>Popular Articles</PopularArticle>
            <PopularArticles>
              Popular articles based on the number of read and views
            </PopularArticles>
          </FrameArticle>
          <Articles>
            <ArticlesContent>
              <ContentImg src={image} alt="" />
              <Card>
                <CardDetails>
                  Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                </CardDetails>
                <CardDate>
                  <CardDateText>June 20th</CardDateText>
                  <CardAutoGroup>
                    <CardEcllipse></CardEcllipse>
                    <CardMinRead>4 min read</CardMinRead>
                  </CardAutoGroup>
                </CardDate>
              </Card>
            </ArticlesContent>
            <ArticlesContent>
              <ContentImg src={image} alt="" />
              <Card>
                <CardDetails>
                  Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                </CardDetails>
                <CardDate>
                  <CardDateText>June 20th</CardDateText>
                  <CardAutoGroup>
                    <CardEcllipse></CardEcllipse>
                    <CardMinRead>4 min read</CardMinRead>
                  </CardAutoGroup>
                </CardDate>
              </Card>
            </ArticlesContent>
            <ArticlesContent>
              <ContentImg src={image} alt="" />
              <Card>
                <CardDetails>
                  Lorem ipsum dolor sit amet, consecteturls psum dolor ls
                </CardDetails>
                <CardDate>
                  <CardDateText>June 20th</CardDateText>
                  <CardAutoGroup>
                    <CardEcllipse></CardEcllipse>
                    <CardMinRead>4 min read</CardMinRead>
                  </CardAutoGroup>
                </CardDate>
              </Card>
            </ArticlesContent>
          </Articles>
        </FrameRight>
      </Frame>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 4rem 11.75rem 0rem 11.75rem;
  width: 100%;
`;
const HeaderImage = styled.img`
  flex-shrink: 0;
  height: 30rem;
  object-fit: cover;
  vertical-align: top;
  width: 100rem;
  border-radius: 0.4rem;
`;
const Frame = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: 260.1286rem;
  padding-right: 3.3rem;
  width: 100%;
`;
const FrameLeft = styled.div`
  flex-shrink: 0;
  height: 100%;
  //   margin-right: 6rem;
  width: 40.2rem;
`;
const FrameLinks = styled.div`
  align-items: flex-end;
  display: flex;
  height: 2.9286rem;
  margin: 0rem 0.486rem 1rem 0rem;
  overflow: hidden;
  position: relative;
  width: calc(100% - 20.4857rem);
`;
const FrameLinksText = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 2.3;
  margin: 0rem 2.1rem 0.064rem 0rem;
  white-space: nowrap;
`;
const FrameLinksIcons = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  flex-shrink: 0;
  height: 100%;
`;
const FrameLinksIcon = styled.div`
  flex-shrink: 0;
  height: 1.8rem;
  object-fit: contain;
  position: relative;
  vertical-align: top;
  width: 1.8rem;
  border: 1px solid #000;
  border-radius: 50%;
  text-align: center;
`;
const CardDate = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 2.1rem;
  margin-right: 17.4rem;
  width: calc(100% - 17.4rem);
`;
const CardAutoGroup = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: 100%;
  padding-left: 0.5rem;
`;
const CardDateText = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
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
const SubRegion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 3.3rem;
`;
const BlogTitlleHead = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.2575;
  max-width: 38.4rem;
  text-align: start;
`;
const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`;
const BlogContentGroup = styled.div`
  flex-shrink: 0;
  height: 108.2rem;
  //   margin-bottom: 4rem;
  position: relative;
  width: 100%;
`;
const BlogContentPara = styled.p`
  color: #252b3b;
  font-size: 0.7rem;
  font-weight: 400;
  height: 154.9rem;
  left: 0;
  line-height: 1;
  position: absolute;
  top: 0;
  width: 33rem;
  text-align: start;
`;
const BlogContentParaSub = styled.span`
  color: rgba(37, 43, 59, 0.6000000238);
  font-size: 0.9rem;
  font-weight: ${(props) => props.weight};
  line-height: 2;
  text-align: start;
`;
const BlogImage = styled.img`
  height: 20rem;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 78.2rem;
  vertical-align: top;
  width: 33.2rem;
`;
const BlogContentParagragh = styled.p`
  text-align: start;
  color: rgba(37, 43, 59, 0.6000000238);
  flex-shrink: 0;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 2;
  max-width: 33rem;
`;
const FrameRight = styled.div`
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  width: 25.5rem;
  margin-top: 6.5rem;
`;
const FrameArticle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: start;
`;
const PopularArticle = styled.p`
  color: #252b3b;
  flex-shrink: 0;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  white-space: nowrap;
`;
const PopularArticles = styled.p`
  color: rgba(37, 43, 59, 0.6000000238);
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 0.8;
  white-space: nowrap;
`;
const Articles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
`;
const ArticlesContent = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 6rem;
  margin-right: 4.8rem;
  width: calc(100% - 3rem);
`;
const ContentImg = styled.img`
  flex-shrink: 0;
  height: 5rem;
  margin-right: 2rem;
  object-fit: cover;
  vertical-align: top;
  width: 5rem;
`;
const Card = styled.div`
  flex-shrink: 0;
  height: calc(100% - 0.85rem);
  margin: 0.45rem 0rem 0.4rem 0rem;
  width: 18.7rem;
`;
const CardDetails = styled.div`
  color: #252b3b;
  display: flex;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.3999999818;
  margin-bottom: 1.4rem;
  max-width: 15.7rem;
  text-align: start;
`;
export default BlogPage;
