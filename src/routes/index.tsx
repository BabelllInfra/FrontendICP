import { createBrowserRouter } from 'react-router-dom'

import { routesNames, routesNamesApp } from './routes'
import NewTransactionPage from '../pages/new_transaction/new_transaction'
import LayoutApp from '../pages/layout';
import QrTransactionPage from '../pages/qr_transaction/qr_transaction';
import MessageWarningTransaction from '../pages/message_transaction/message_transaction';
import MessageSuccessTransaction from '../pages/message_success_transaction/message_success_transaction';

const routesApp = [
  {
    path: routesNamesApp.newTransaction,
    element: <NewTransactionPage/>
  },
  {
    path: routesNamesApp.qrTransaction,
    element: <QrTransactionPage/>
  },
]

const router = createBrowserRouter([
  {
    path: routesNames.init,
    element: <LayoutApp />,
    children: routesApp
  },
  {
    path: routesNames.messageWarningTransaction,
    element: <MessageWarningTransaction />,
  },
  {
    path: routesNames.messageSuccessTransaction,
    element: <MessageSuccessTransaction />,
  },
])

export default router;