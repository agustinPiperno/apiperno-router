import './App.css'
import HomePage  from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import {Router} from './Router.jsx'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  }
]

function App() {
  return (
   <main>
    <Router routes={routes}/>
   </main>
  )
}

export default App
