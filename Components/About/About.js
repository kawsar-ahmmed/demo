import { Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 80px 0;

  .title {
    color: #fff;
    font-size: 20px;
  }
  .text {
    color: rgba(255,255,255,0.6);
    padding-left: 0px;
    margin: 0;
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 575px) {
    .text {
      padding-left: 0px;
    }
  }
`;

const About = () => {
  return (
    <Wrapper id="about">
      <Col xs={11} sm={10} md={8} lg={7} className="mx-auto">
        <div>
          <p className="title">About</p>
          <p className="text">
            {" "}
            ‘Sol Era’ is a unique project aiming to bring the past, present, and
            future of the universe into the Solverse. Our first step towards
            this begins with the launch of a genesis collection, consisting of
            5555 unique art pieces carefully curated from the beginning of time
            until the end.
          </p>
          <p className="text">
            Each NFT from our genesis collection will also serve as a mint pass,
            rewarding all holders with exclusive access to future Sol Era
            releases.
          </p>
        </div>
      </Col>
    </Wrapper>
  );
};
export default About;
