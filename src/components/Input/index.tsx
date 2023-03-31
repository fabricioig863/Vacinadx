import React, {
  useCallback,
  useState,
  useMemo,
  forwardRef,
  useRef,
  useImperativeHandle,
} from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import Icon from '@/components/Icon';
import * as S from './styles';
import {InputProps, InputValueRef} from './types';

const Input: React.ForwardRefRenderFunction<InputValueRef, InputProps> = (
  {
    color = 'surface',
    secureTextEntry,
    icon,
    iconColor,
    label,
    error,
    iconPosition = 'right',
    onChangeText,
    ...rest
  },
  ref,
) => {
  const {colors} = useTheme();

  // States
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Refs
  const internalRef = useRef<any>();

  // useImperativeHandle
  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text],
  );

  // Memos
  const selectedColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return colors.error.main;
    }
    if (iconColor) {
      return colors[iconColor].main;
    }
    return colors[color].main;
  }, [error, colors, iconColor, color]);

  const renderIcon = useCallback(() => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity onPress={() => setPasswordVisible(old => !old)}>
          <S.IconContainer iconPosition={iconPosition}>
            <Icon
              icon={!passwordVisible ? 'eyeOpen' : 'eyeClose'}
              activeColor={selectedColorForActiveColorIcon}
            />
          </S.IconContainer>
        </TouchableOpacity>
      );
    }

    if (icon) {
      return (
        <S.IconContainer iconPosition={iconPosition}>
          <Icon icon={icon} activeColor={selectedColorForActiveColorIcon} />
        </S.IconContainer>
      );
    }

    return null;
  }, [
    secureTextEntry,
    icon,
    iconPosition,
    passwordVisible,
    selectedColorForActiveColorIcon,
  ]);

  return (
    <S.Container>
      {!!label && (
        <S.Label color="surface" typography="body3">
          {label}
        </S.Label>
      )}
      <S.Border
        borderColor={error ? colors.error.main : colors[color].main}
        color="transparent">
        {iconPosition === 'left' && renderIcon()}
        <S.InputInternal
          ref={internalRef}
          value={text}
          onChangeText={value => {
            setText(value);
            onChangeText?.(value);
          }}
          {...(rest as any)}
          secureTextEntry={secureTextEntry && !passwordVisible}
        />
        {iconPosition === 'right' && renderIcon()}
      </S.Border>
      {!!error && (
        <S.Error color="error" typography="body1">
          {error}
        </S.Error>
      )}
    </S.Container>
  );
};

// A partir de agora toda a ref que for colocada em nossos components ele será passado
// para as nossas propriedades.
export default forwardRef(Input);
