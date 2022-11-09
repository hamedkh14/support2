import Dashboard from "./pages/Dashboard";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

document.dir = 'rtl';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RTL>
          <Dashboard />
        </RTL>
      </ThemeProvider>
    </>
  );
}

export default App;
