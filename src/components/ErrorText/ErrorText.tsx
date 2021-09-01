import React from 'react';
import {FC} from 'react';
import {css} from 'styled-components/native';
import {selectors} from '../../store/ducks';
import {useAppSelector} from '../../store/hooks';
import {colors} from '../../styles/colors';
import {AppText} from '../../ui/AppText';

export const ErrorText: FC = () => {
  const errorMessage = useAppSelector(selectors.user.selectError);

  return (
    <>
      {errorMessage !== '' && (
        <AppText containerStyled={appTextStyle}>{errorMessage}</AppText>
      )}
    </>
  );
};

const appTextStyle = css`
  text-align: center;
  color: ${colors.red};
`;

export default ErrorText;
