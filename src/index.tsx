import { ColorModeScript, Spinner } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RoutesConfig } from './navigation/Routes';
import ProviderChakra from './providers/ProviderChakra';
import { ProviderWeb3Modal } from './providers/ProviderWeb3Modal';
import * as serviceWorker from './serviceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';
import('./Pollyfills');

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense>
      <ColorModeScript />
      <ProviderChakra>
        <React.Suspense fallback={<Spinner />}>
          <ProviderWeb3Modal>
            <ParallaxProvider>
              <RouterProvider router={RoutesConfig}></RouterProvider>
            </ParallaxProvider>
          </ProviderWeb3Modal>
        </React.Suspense>
      </ProviderChakra>
    </React.Suspense>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
