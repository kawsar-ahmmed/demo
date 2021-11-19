import React, { useState } from "react";

import { Col, Accordion, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMinus } from "react-icons/hi";
import styled from "styled-components";
// import {FiPlus, FiMinus} from "react-icons/fi";

const Wrapper = styled.div`
  padding: 80px 0;
  .title {
    color: #fff;
    font-size: 20px;
    padding-left: 20px;
  }
  .tables {
    color: #fff;
    display: flex;
    position: relative;
    width: 333px;
    margin: 0 auto;
    padding: 25px 0;
  }
  .line {
    position: absolute;
    height: 1px;
    background: #2b4986;
    width: 100%;
    top: 17%;
  }
  .first {
    padding: 0 20px;
  }
  .second {
    padding: 0 20px;
    border-left: 1px solid #2b4986;
  }
  .firstItem {
    font-size: 18px;
    margin: 0;
    padding-bottom: 5px;
  }
  .item {
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Faq = () => {
  const [value, setValue] = useState(null);
  const dashboardArray = [
    {
      question: "When can I buy and what is the price of minting?",

      Ans: "Release of the genesis collection will be held in the first week of December, 2021. The price for each piece will be fixed at 2 SOL.",
    },
    {
      question: "How can I buy?",

      Ans: "When minting starts, connect your wallet to this webpage and proceed to click the mint button located at the top. More details along with a tutorial will be released in our Discord server closer to release.",
    },
    {
      question: "How many can I mint?",

      Ans: "Mints will be limited to 1 per transaction, however the number of transactions you can make will be unlimited.",
    },
    {
      question: "What is the total supply?",

      Ans: "Total supply is limited at 5555, this will not change.",
    },
    {
      question: "What are the different eras/rarities?",

      table: true,

      Ans: "Please note that these rarities are approximate, but will be within range of the percentages stated (±2%).",
      Ans2: "There are a variety of art styles present within each era, with certain art styles rarer than others.",
    },
  ];
  const leftTable = [
    "Prehistoric",
    "Ancient History",
    "Middle Ages",
    "Early Modern",
    "Modern",
    "Contemporary",
    "Future",
    "Mythic",
  ];
  const rightTable = [6, 13, 15, 18, 21, 17, 7, 3];
  return (
    <Wrapper id="faq">
      <Col xs={11} sm={10} md={8} lg={7} className="mx-auto ">
        <p className="title">FAQ</p>
        {dashboardArray.map((el, i) => (
          <Accordion >
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{el.question}</Accordion.Header>
              <Accordion.Body>
                {el.table && (
                  <div className="tables">
                    <div className="line"></div>
                    <div className="first">
                      <p className="firstItem">Era</p>
                      {leftTable.map((el, i) => (
                        <p className="item" key={i}>
                          {el}
                        </p>
                      ))}
                    </div>
                    <div className="second">
                      {" "}
                      <p className="firstItem">Rarity (%)</p>
                      {rightTable.map((el, i) => (
                        <p className="item" key={i}>
                          {el}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                <p> {el.Ans}</p>
                <p>{el.Ans2 && el.Ans2}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Col>
    </Wrapper>
  );
};
export default Faq;
