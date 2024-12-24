import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from "react-router";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <MantineProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>

)
