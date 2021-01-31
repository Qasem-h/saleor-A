import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;

  :hover {
    background-color: ${props => props.theme.colors.hoverLightBackground};
  }

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

// export const Title = styled.h4`
//   text-transform: capitalize;
//   font-weight: normal;
//   ${textProps}
// `;

export const Image = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  > img {
    object-fit: contain;
    max-width: 100%;
  }
`;
export const Date = styled.div`
  position: absolute;
  background: #3a3973;
  color: #ffffff;
  padding: 8px 15px;
  left: 0;
  top: 10px;
  font-size: 14px;
`;

export const Body = styled.div`
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
  border-radius: 5px;
  background: #ffffff;
  padding: 20px;
  margin: -30px 20px 0;
  position: relative;
  min-height: 160px;
`;

export const Title = styled.h4`
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 10px;
  ${textProps}
`;
export const Bar = styled.h4`
  margin-top: 20px;
  ${textProps}
  > a {
    display: inline-block;
    color: #111111;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: capitalize;
    padding: 3px 0;
    position: relative;
  }
`;
