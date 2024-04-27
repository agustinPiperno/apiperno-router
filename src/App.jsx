import './App.css'
import { lazy } from 'react'

import HomePage  from './pages/Home.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

import {Router} from './Router.jsx'
import {Route} from './Route.jsx'
import { Suspense } from 'react'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage,
  },
  {
    path: '/search/:query',
    Component: SearchPage,
  }
]

function App() {
  return (
   <main>
    <Suspense fallback={ <div>Loading...</div> }>
      <Router routes={appRoutes} defaultComponent={ Page404 }>
        <Route path='/' Component={ HomePage }/>
        <Route path='/about' Component={ LazyAboutPage }/>
        <Route path='/search/:query' Component={ SearchPage }/>
      </Router>
    </Suspense>
    </main>
  )
}

export default App
