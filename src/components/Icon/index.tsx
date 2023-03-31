import React from 'react';
import * as S from './styles';
import {IconProps} from './types';
import Icons from '../../constants/icons';

const Icon = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  if (activeColor) {
    return (
      <S.Container
        size={size}
        source={Icons[icon]}
        style={[{tintColor: activeColor}, style]}
      />
    );
  }
  return <S.Container size={size} source={Icons[icon]} style={style} />;
};

export default Icon;
