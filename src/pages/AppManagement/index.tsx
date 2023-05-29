import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider, createTheme } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import React, { useEffect, useMemo } from 'react';

import * as Selectors from './selectors';
import * as Actions from './slice';
import { Layout } from './Container';

const stateSelector = createStructuredSelector({
  loading: Selectors.makeSelectLoading(),
  userData: Selectors.makeSelectUserData(),
  error: Selectors.makeSelectError(),
  mode: Selectors.makeSelectThemeMode(),
  currentLocale: Selectors.makeSelectCurrentLocale()
});
const AppManagement = () => {
  const { mode, currentLocale } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(Actions.fetchUser());
    });
  }, [dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
        direction: currentLocale === 'en' ? 'ltr' : 'rtl'
      }),
    [mode, currentLocale]
  );

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
  });

  const cacheLtr = createCache({ key: 'muiltr', stylisPlugins: [] });

  return (
    <CacheProvider value={currentLocale === 'en' ? cacheLtr : cacheRtl}>
      <ThemeProvider theme={theme}>
        <Layout dispatch={dispatch} mode={mode} locale={currentLocale} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppManagement;
