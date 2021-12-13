import Link from "next/link";
import styled from "styled-components";
import Card from "../Card";

const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;

  .text {
    padding: 0;
    margin-top: 0.5rem;
    color: var(--clr-text-primary);
    font-size: 32px;
    line-height: 1.3;
    font-weight: 600;
  }
`;

const ViewMoreCard = () => {
  return (
    <Card className="bg-lightgrey">
      <StyledDiv className="flex">
        <Link href="/work">
          <a>
            <h2 className="text ">View More</h2>
          </a>
        </Link>
      </StyledDiv>
    </Card>
  );
};

export default ViewMoreCard;
