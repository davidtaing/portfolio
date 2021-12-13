import Link from "next/link";
import styled from "styled-components";
import Card from "../Card";

const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;

  .text {
    padding: 0;
  }
`;

const SeeMoreCard = () => {
  return (
    <Card className="bg-lightgrey">
      <StyledDiv className="flex">
        <Link href="/work">
          <a>
            <h2 className="text ">See More</h2>
          </a>
        </Link>
      </StyledDiv>
    </Card>
  );
};

export default SeeMoreCard;
