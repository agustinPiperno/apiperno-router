import './App.css'
import HomePage  from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import {Router} from './Router.jsx'
import {Route} from './Route.jsx'

const appRoutes = [
  {
    path: '/search/:query',
    component: SearchPage,
  }

]

function App() {
  return (
   <main>
    <Router routes={appRoutes} defaultComponent={ Page404 }>
      <Route path='/' component={ HomePage }/>
      <Route path='/about' component={ AboutPage }/>
      <Route path='/search/:query' component={ SearchPage }/>
    </Router>
   </main>
  )
}

export default App
