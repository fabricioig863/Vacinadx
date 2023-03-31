import styled from "styled-components/native";
import { Props } from "./types";

export const Container = styled.View<Props>`
  // Neste código ao passar a propriedade height com duas negacao
  // voce transforma ela em um boleano, fazendo assim com que caso o height
  // seja true ele retorna o valor passado pela propriedade.
  ${({ height }) => !!height && `height: ${height}px;`}
  ${({ height }) => !!height && `min-height: ${height}px;`}
  ${({ height }) => !!height && `max-height: ${height}px;`}

  ${({ width }) => !!width && `width: ${width}px;`}
  ${({ width }) => !!width && `min-width: ${width}px;`}
  ${({ width }) => !!width && `max-width: ${width}px;`}
`;

