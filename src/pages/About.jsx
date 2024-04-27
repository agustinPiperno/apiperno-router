import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Esto es un clon de React-Router.',
    button: 'Ir a Inicio',
  },
  en: {
    title: 'About',
    description: 'This is a React-Router clone.',
    button: 'Go to Home',
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')
  
  return (
    <>
      <h1>{ i18n.title }</h1>
      <p>{ i18n.description }</p>
      <Link to = '/' >{ i18n.button }</Link>
    </>
  )
}