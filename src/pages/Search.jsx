import { useEffect } from "react"

export default function SearchPage ({routeParams}) {
  useEffect(() => {
    document.title = `You searched ${routeParams.query}`
  }, [routeParams.query])

  return (
    <h1>You searched {routeParams.query}.</h1>
  ) 
}
