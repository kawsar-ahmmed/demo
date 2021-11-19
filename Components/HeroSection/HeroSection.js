import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 110px 0 50px 0;
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <Row>
        <Col xs={8} md={4} className="mx-auto ">
          <img src="/images/banner.png" alt="" className="w-100" />
        </Col>
      </Row>
    </Wrapper>
  );
};
export default HeroSection;
