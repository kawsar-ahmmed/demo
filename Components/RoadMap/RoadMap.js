import styled from "styled-components";
import { CgShapeHexagon } from "react-icons/cg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Col } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 80px 0;
  .title {
    color: #fff;
    font-size: 20px;
  }
  .vertical-timeline-element-title {
    font-size: 16px;
    padding-right: 8px;
  }
  .vertical-timeline-element-subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }
  .vertical-timeline {
    padding: 0;
    margin-left: -9px;
  }

  .vertical-timeline-element-content {
    box-shadow: none;
    color: #fff;
    background: transparent;
    padding: 0;
    padding-top: 5px;
  }
  .vertical-timeline-element-content-arrow {
    display: none;
  }
  .vertical-timeline-element-icon {
    box-shadow: none;
    font-size: 35px;
    border-radius: 0%;
  }
  .vertical-timeline::before {
    background: #244078;
    top: 8px;
    width: 3px;
    height: 98%;
  }
  @media only screen and (max-width: 1457px) {
    .vertical-timeline::before {
      height: 99%;
    }
  }
  @media only screen and (max-width: 1456px) {
    .vertical-timeline::before {
      height: 95%;
    }
  }
  @media only screen and (max-width: 1103px) {
    .vertical-timeline::before {
      height: 93.5%;
    }
  }
  @media only screen and (max-width: 1169px) {
    .vertical-timeline::before {
      height: 93%;
    }
  }
  @media only screen and (max-width: 964px) {
    .vertical-timeline::before {
      height: 92.5%;
    }
  }
  @media only screen and (max-width: 595px) {
    .vertical-timeline::before {
      height: 91%;
    }
  }
  @media only screen and (max-width: 422px) {
    .vertical-timeline::before {
      height: 90%;
    }
  }
`;
const RoadMap = () => {
  const roadmap = [
    "The genesis collection is made public for minting. Our journey begins here.",
    "Community competitions and events will be hosted through all our social platforms. Community comes first, everything else is secondary.",
    "We launch an art gallery... in the metaverse! Genesis holders can nominate their own NFTs to be displayed in the gallery on a weekly basis. Owners of NFTs displayed in the gallery will be rewarded in SOL.",
    "Redeem your mint pass for the first time to claim a free physical copy of your NFT.",
    "An exclusive avatar NFT linked to each and every genesis NFT can be claimed with your mint pass.",
    "Roadmap 2.0 is released, extending our journey until the end of time."
  ];

  return (
    <Wrapper id="roadmaps">
      <Col xs={11} sm={10} md={8} lg={7} className="mx-auto" id="roadmap">
        <p className="title">Roadmap</p>
        <VerticalTimeline layout="1-column-left">
          {roadmap.map((el, i) => (
            <VerticalTimelineElement
              key={i}
              icon={
                <CgShapeHexagon
                  color="#244078"
                  style={{ background: "#020a19" }}
                />
              }
            >
              <span className="vertical-timeline-element-title">
                Stage {i + 1}:
              </span>
              <sapn className="vertical-timeline-element-subtitle">{el}</sapn>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Col>
    </Wrapper>
  );
};
export default RoadMap;
