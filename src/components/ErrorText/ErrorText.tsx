import React, {FC} from 'react';
import {css} from 'styled-components/native';
import {colors} from '../../styles/colors';
import {AppText} from '../../ui/AppText';

interface ErrorTextProps {
  error: string;
}

export const ErrorText: FC<ErrorTextProps> = ({error}) => {
  return (
    <>
      {error !== '' && (
        <AppText containerStyled={appTextStyle}>{error}</AppText>
      )}
    </>
  );
};

const appTextStyle = css`
  text-align: center;
  color: ${colors.red};
`;

export default ErrorText;
