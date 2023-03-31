import {useCallback, useEffect, useState, useMemo} from 'react';
import {Appearance} from 'react-native';
import {themeDark} from '../../constants/styles/themes/dark';
import {themeLight} from '../../constants/styles/themes/light';
import {colorSchemeProps, Props, themeType} from './types';
import {DefaultTheme} from 'styled-components';

const useAppearence = (): Props => {
  const [currentTheme, setCurrentTheme] = useState<themeType>(
    Appearance.getColorScheme() || 'light',
  );

  // Para saber quando a cor for trocado
  const handleChangeAppearance = useCallback(
    ({colorScheme}: colorSchemeProps) => {
      if (colorScheme) setCurrentTheme(colorScheme);
    },
    [],
  );

  // usamos o useMemo para armazenar o nosso thema
  const theme = useMemo(() => {
    const theme: DefaultTheme =
      currentTheme === 'light' ? themeLight : themeDark;
    return theme;
  }, [currentTheme]);

  // Para monitorar a cor que foi trocada.
  useEffect(() => {
    const event = Appearance.addChangeListener(handleChangeAppearance);

    return () => event.remove();
  }, [handleChangeAppearance]);

  return {currentTheme, theme};
};

export default useAppearence;
