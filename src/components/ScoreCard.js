import React from "react";
import styled from "styled-components";

function ScoreCard(props) {
  return (
    <CardStyle>
      <GridLeft>
        Name <br />
        {props.name}
      </GridLeft>
      <GridCentre>
        Accuracy <br /> {props.accuracy}%
      </GridCentre>
      <GridRight>
        When <br />
        {props.timestamp}
      </GridRight>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left center right";
`;

const GridLeft = styled.div`
  grid-area: left;
  text-align: center;
`;

const GridCentre = styled.div`
  grid-area: center;
  text-align: center;
`;

const GridRight = styled.div`
  grid-area: right;
  text-align: center;
`;

export default ScoreCard;
