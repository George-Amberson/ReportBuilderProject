import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#F5F5F5',
  }
};

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#424242',
  }
};

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme
    }
    //
  }
});