import styled from 'styled-components/native';
import { IconProps } from './types';

// O partial pega todas as propriedades de tipos
// definidos obrigatorios e transforma em opcional.
// A única diferença é que agora podemos usar ambos
// se quisermos que o tipo tenha algumas propriedades ausentes,
// podemos usar Partial

export const Container = styled.Image<Partial<IconProps>>`
  min-height: ${({size}) => size}px;
  min-width: ${({size}) => size}px;
  max-height: ${({size}) => size}px;
  max-width: ${({size}) => size}px;
`;
