import React from 'react';
import {Props} from './types';
import * as S from './styles';

const Text = ({children, color, typography, ...rest}: Props) => {
  return (
    <S.Container
      color={color || 'surface'}
      typography={typography || 'subtitle1'}
      {...rest}>
      {children}
    </S.Container>
  );
};

export default Text;
