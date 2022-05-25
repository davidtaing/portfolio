import styled from "styled-components";

interface Props {
  imageUrl: string;
  backgroundColor: string;
  backgroundSize?: "contain" | "cover" | "auto";
}

const StyledDiv = styled.div<Props>`
  background-color: #52ffa815;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  height: 100%;
  padding: ${(props) => (props.backgroundSize !== "cover" ? "1rem" : 0)};
  background-color: ${(props) => props.backgroundColor};

  .image {
    width: 100%;
    height: 100%;
    background-image: url("${(props) => props.imageUrl}");
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
  }
`;

export function ProjectCardImage({
  imageUrl,
  backgroundColor,
  backgroundSize = "contain",
}: Props) {
  return (
    <StyledDiv
      className="image-container"
      imageUrl={imageUrl}
      backgroundColor={backgroundColor}
      backgroundSize={backgroundSize}
    >
      <div className="image" style={{ backgroundSize: backgroundSize }} />
    </StyledDiv>
  );
}
