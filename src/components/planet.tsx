import data from "../data.json";
import { useParams } from "react-router-dom";
import "./card.css";
import styled from "styled-components";

export default function Planet() {
  const params = useParams();
  const planetName = params.id;

  const planet = data.find((item) => item.name == planetName);

  console.log(planet);
  return (
    <>
      <Container>
        <div>
          <img
            src={planet?.images.planet}
            style={{
              filter: `drop-shadow(1px 1px 40px ${planet?.overview.shadow})`,
            }}
          />
        </div>
        <ContentSide hoverColor={planet?.overview.hover}>
          <h1>{planet?.name}</h1>
          <p>{planet?.overview.content}</p>
          <span>Source : </span>
          <a href={planet?.overview.source}>wikipedia</a>

          <ContentButtons className="first buttons">
            <span>01</span>
            <span>OVERVIEW</span>
          </ContentButtons>

          <ContentButtons className="buttons">
            <span>02</span>
            <span>Internal Structure</span>
          </ContentButtons>
          <ContentButtons className="buttons">
            <span>03</span>
            <span>Surface Geology</span>
          </ContentButtons>
        </ContentSide>
      </Container>
      <Box>
        <Card>
          <h1>ROTATION TIME</h1>
          <h1 className="number">{planet?.rotation}</h1>
        </Card>
        <Card>
          <h1>REVOLUTION TIME</h1>
          <h1 className="number">{planet?.revolution}</h1>
        </Card>
        <Card>
          <h1>RADIUS</h1>
          <h1 className="number">{planet?.radius}</h1>
        </Card>
        <Card>
          <h1>AVERAGE TEMP</h1>
          <h1 className="number">{planet?.temperature}</h1>
        </Card>
      </Box>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
  margin-inline: 150px;

  img {
    width: 350px;
    height: 350px;
    animation: rotation 10s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const ContentSide = styled.div<{ hoverColor: any }>`
  width: 350px;
  .buttons:hover {
    background-color: ${(props) => props.hoverColor || "transparent"};
  }
  h1 {
    font-family: Antonio;
    font-size: 70px;
    font-weight: 400;
    line-height: 103.52px;
    color: white;
    margin-bottom: 20px;
  }
  p {
    font-family: Spartan;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    color: white;
    margin-bottom: 20px;
  }
  span {
    color: white;
  }
  .first {
    background-color: ${(props) => props.hoverColor || "transparent"};
    margin-top: 20px;
  }
`;
const ContentButtons = styled.div`
  border: solid 1px gray;
  padding-block: 10px;
  display: flex;
  gap: 30px;
  padding-left: 20px;
  margin-top: 20px;

  span {
    font-family: Spartan;
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2.5714285373687744px;
    color: white;
  }
`;

const Box = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
`;
const Card = styled.div`
  border: solid 1px white;
  padding-block: 10px;
  padding-left: 20px;
  padding-right: 40px;
  margin-left: 20px;

  h1 {
    font-family: Spartan;
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    color: white;
  }
  .number {
    font-family: Antonio;
    font-size: 40px;
    font-weight: 400;
    line-height: 51.76px;
    letter-spacing: -1.5px;
  }
`;
