import styled from "styled-components";
import ErrorPageIcon from "./images/ErrorPage.svg";
import { GrShareOption } from "react-icons/gr";
const Rewards = () => {
  return (
    <RewardContainer>
      <div>
        <img src={ErrorPageIcon} alt="" />
      </div>
      <RewardContent>
        {/* <ContentHead>Looks like you’re lost</ContentHead>
          <ContentText>
            The page you’re looking for is not available
          </ContentText>
          <GoBack>
            <SocialLnk>
              <NavLink exact to="/">
                <HiArrowSmLeft />
              </NavLink>
            </SocialLnk>
            <GoBackText>Go back home</GoBackText>
          </GoBack> */}
        <ShareButtonn></ShareButtonn>
        <ShareButton>
          <GrShareOption />
          <Share>Share</Share>
        </ShareButton>
      </RewardContent>
    </RewardContainer>
  );
};
const RewardContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const RewardContent = styled.div`
  //   text-align: start;
  width: 306px;
  height: 300px;
  border: 1px solid #fe5a81;
  display: flex;
  flex-direction: column;
  //   gap: 20px;
`;
const ShareButton = styled.div`
  width: 306px;
  height: 50px;
  background-color: #fe5a81;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Share = styled.p`
  color: #fff;
  //   line-height: 70px;
  padding-top: 10px;
`;
const ShareButtonn = styled.div`
  width: 306px;
  height: 300px;
  background-color: #000;
`;
const ContentHead = styled.h3`
  font-weight: 500;
  font-size: 20px;
  /* line-height: 48px; */

  color: #252b3b;
`;
const ContentText = styled.p`
  font-weight: 500;
  font-size: 13px;
  margin-left: -0px;
  line-height: 28px;
  color: #252b3b;
`;
const GoBack = styled.div`
  display: flex;
`;
const SocialLnk = styled.div`
  & a {
    display: inline-block;
    height: 25px;
    width: 25px;
    background: #fe5a81;
    margin: 0 10px 10px 0;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    border: none;
    transition: all 0.5s ease;
  }
  & a:hover {
    color: #fff;
    background-color: rgba(37, 43, 59, 0.6);
    padding-left: 5px;
  }
`;
const GoBackText = styled.p`
  font-weight: 500;
  font-size: 15px;
  /* line-height: 28px; */
  /* identical to box height, or 117% */
  color: #7db8aa;
`;
export default Rewards;
