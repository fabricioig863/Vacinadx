import React, {useMemo} from 'react';
import {ButtonProps} from './types';
import {useTheme} from 'styled-components';
import * as S from './styles';

const Button = ({
  children,
  mode = 'contained',
  color = 'primary',
  loading,
  onPress,
  ...rest
}: ButtonProps) => {
  const {colors} = useTheme();

  const colorByMode = useMemo(() => {
    return mode === 'outlined' ? colors[color].main : colors[color].onMain;
  }, [mode, color, colors]);

  return (
    <S.Container
      mode={mode}
      borderColor={colors[color].main}
      color={colors[color].main}
      onPress={onPress}
      {...rest}>
      <S.Title color={colorByMode}>{children}</S.Title>
      {loading && <S.Loading size={15} color={colorByMode} />}
    </S.Container>
  );
};

export default Button;
