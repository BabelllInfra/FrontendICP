import { useNavigate } from 'react-router';
import { routesNames, routesNamesApp } from '../routes/routes';
import { useEffect } from 'react';
import { changeSelect, changeVisible } from '../redux/mainSlice';
import { useDispatch } from 'react-redux';


const useNavigateMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const validateAndValidatePage = (index: number) => {
    dispatch(changeSelect({ select: index }));
    dispatch(changeVisible({ visible: false }));
    // debugger
    if (index === 0) {
      navigate(routesNamesApp.balance)
      return
    }
    else if (index === 1) {
      navigate(routesNamesApp.deposit)
      return
    }
    else if (index === 2) {
      navigate(routesNamesApp.send)
      return
    }
    else if (index === 3) {
      navigate(routesNames.messageLogoutUser)
      return
    }
  }
  useEffect(() => {
  }, [])

  return {
    validateAndValidatePage,
  }
}


export default useNavigateMain
