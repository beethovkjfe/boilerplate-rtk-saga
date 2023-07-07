import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider, createTheme } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import React, { useEffect, useMemo } from 'react';

import { Routes } from 'routes';
import { hasLoginAccess } from 'config';
import { defaultTheme } from 'theme';

import * as Selectors from './selectors';
import * as Actions from './slice';
import { Layout } from './containers';

const stateSelector = createStructuredSelector({
  loading: Selectors.makeSelectLoading(),
  userData: Selectors.makeSelectUserData(),
  error: Selectors.makeSelectError(),
  mode: Selectors.makeSelectThemeMode(),
  currentLocale: Selectors.makeSelectCurrentLocale()
});
const AppManagement = (props: any) => {
  const { mode, currentLocale } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const { palette, ...rest } = defaultTheme;

  const isUserAuthenticated = hasLoginAccess();

  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(Actions.fetchUser());
    }
  }, [isUserAuthenticated]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { ...palette, mode },
        ...rest,
        direction: currentLocale === 'en' ? 'ltr' : 'rtl'
      }),
    [mode, currentLocale, defaultTheme]
  );

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
  });
  const cacheLtr = createCache({ key: 'muiltr', stylisPlugins: [prefixer] });

  return (
    <CacheProvider value={currentLocale === 'en' ? cacheLtr : cacheRtl}>
      <ThemeProvider theme={theme}>
        <Routes
          layout={Layout}
          isAuthenticated={isUserAuthenticated}
          layoutProps={{ dispatch: dispatch, mode, locale: currentLocale }}
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppManagement;
