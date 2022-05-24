import styled from "styled-components";

interface Props {
  thumbnailUrl: string;
  backgroundSize?: "contain" | "cover" | "auto";
}

const StyledDiv = styled.div<Props>`
  background-color: #52ffa815;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  height: 100%;
  padding: ${(props) => (props.backgroundSize !== "cover" ? "1rem" : 0)};

  .image {
    width: 100%;
    height: 100%;
    background-image: url("${(props) => props.thumbnailUrl}");
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
  }
`;

export function ProjectCardImage({
  thumbnailUrl,
  backgroundSize = "contain",
}: Props) {
  return (
    <StyledDiv
      className="image-container"
      thumbnailUrl={thumbnailUrl}
      backgroundSize={backgroundSize}
    >
      <div className="image" style={{ backgroundSize: backgroundSize }} />
    </StyledDiv>
  );
}
