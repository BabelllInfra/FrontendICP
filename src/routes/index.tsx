import { createBrowserRouter } from 'react-router-dom'

import { routesNames, routesNamesApp } from './routes_names'
import NewTransactionPage from '../pages/new_transaction/new_transaction'
import LayoutApp from '../pages/layout';

const routesApp = [
  {
    path: routesNamesApp.newTransaction,
    element: <NewTransactionPage/>
  },

]

const router = createBrowserRouter([
  {
    path: routesNames.init,
    element: <LayoutApp />,
    children: routesApp
  },
])

export default router;