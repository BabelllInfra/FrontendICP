import { createBrowserRouter } from 'react-router-dom'

import { routesNames, routesNamesApp } from './routes'
import LayoutApp from '../pages/layout';
import MessageWarningTransaction from '../pages/message_transaction/message_transaction';
import MessageSuccessTransaction from '../pages/message_success_transaction/message_success_transaction';
import MessageSuccessSendCrypto from '../pages/message_success_crypto/message_success_crypto';
import BalancePage from '../pages/balance/balance';

const routesApp = [
  {
    path: routesNamesApp.balance,
    element: <BalancePage/>
  },
  // {
  //   path: routesNamesApp.qrTransaction,
  //   element: <QrTransactionPage/>
  // },
  // {
  //   path: routesNamesApp.newTransactionCrypto,
  //   element: <NewTransactioCryptoPage />,
  // },
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
  {
    path: routesNames.messageSuccessSendCrypto,
    element: <MessageSuccessSendCrypto />,
  },

  
])

export default router;