import { styled } from "@styles";

export const Wrapper = styled.div`
  grid-template-areas: "sidebar preview";
  height: 100%;
  min-width: 970px;
  grid-template-columns: 76px 1fr;
`;

export const Preview = styled.div`
  grid-area: preview;
  width: auto;
  max-height: 410px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
