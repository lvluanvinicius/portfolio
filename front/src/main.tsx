import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './routes'
import GlobalStyles from './theme/globalStyles'

// Image Background Theme.
const LibBack = "../assets/img/bg/library.png";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>    
    <Routers />
    <GlobalStyles img={LibBack} />
  </React.StrictMode>
)
