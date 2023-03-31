import React from 'react';
import * as S from './styles';
import {Props} from './types';

const Separator = ({height, width}: Props) => {
  return <S.Container width={width} height={height} />;
};

export default Separator;
