import React, {FC} from 'react';
import {CSSProp} from 'styled-components';
import styled from 'styled-components/native';

interface StyleContainerProps {
  containerStyled: CSSProp;
}

export const StyledContainer: FC<StyleContainerProps> = ({
  children,
  containerStyled,
}) => {
  return <RootContainer $CSS={containerStyled}>{children}</RootContainer>;
};

type RootContainerType = {
  $CSS: CSSProp;
};

const RootContainer = styled.View<RootContainerType>`
  ${({$CSS}) => $CSS}
`;
