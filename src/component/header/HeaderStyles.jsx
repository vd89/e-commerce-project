import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const OptionContainerCss = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerCss}
`;

export const OptionDiv = styled.div`
  ${OptionContainerCss}
`;
