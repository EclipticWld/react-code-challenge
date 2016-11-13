import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import ContactKeeper from './ContactKeeper'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: { onEnter: (nextState, replace) => replace('/contact-keeper') },
  childRoutes: [
    ContactKeeper(store)
  ]
})

export default createRoutes
