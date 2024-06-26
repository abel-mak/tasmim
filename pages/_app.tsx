import { AppProps } from "next/app";
import "../styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
const { library, config } = require('@fortawesome/fontawesome-svg-core');
config.autoAddCss = false;
// import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library so you can use them in your components
library.add(fas);

const MyApp = ({ Component, pageProps }: AppProps) => {

  return <div>
    <Component {...pageProps} />
  </div>
}

export default MyApp;