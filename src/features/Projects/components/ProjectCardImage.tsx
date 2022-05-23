import styled from "styled-components";

const StyledDiv = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  margin: auto;
`;

interface Props {
  thumbnailUrl: string;
  backgroundSize?: "contain" | "cover" | "auto";
}

export function ProjectCardImage({
  thumbnailUrl,
  backgroundSize = "contain",
}: Props) {
  return (
    <StyledDiv
      className="image-container"
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
        backgroundSize: backgroundSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="image"></div>
    </StyledDiv>
  );
}
