import { Hero1 } from "../Heros/hero1/Hero1";
import { Hero2 } from "../Heros/hero2/Hero2";
import { Hero3 } from "../Heros/hero3/Hero3";
import { Hero4 } from "../Heros/hero4/Hero4";
import { Hero5 } from "../Heros/hero5/Hero5";
import { Hero6 } from "../Heros/hero6/Hero6";
import { Hero7 } from "../Heros/hero7/Hero7";
import { Hero8 } from "../Heros/hero8/Hero8";
import { Hero9 } from "../Heros/hero9/Hero9";
import styled from "styled-components";

export function HomePage() {
  return (
    <HomepageView>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <Hero9 />
    </HomepageView>
  );
}
const HomepageView = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
