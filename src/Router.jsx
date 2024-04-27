import { useState, useEffect } from 'react'
import { EVENTS } from './consts.js'
import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404 Not Found :_ )</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  }, [])

  let routeParams = {}

  const Page = routes.find(({path}) => {
    if(path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if(!matched) return false

    routeParams = matched.params
    return true
  })?.component
  
  return Page 
  ? <Page routeParams={routeParams}/> 
  : <DefaultComponent routeParams={routeParams}/>
}