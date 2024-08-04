/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
// import StatusButton from "../../models/button_status_enum";
import { ChangeIsBack } from "../../redux/mainSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import useErrorHandling from "../../hooks/useError";
import iconCk from "../../assets/images/ckBTC-token.png"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
/* eslint-disable no-case-declarations */
const BalancePage = () => {
  const backgroundImageUrl = 'icp_balance_background.png';
  const [user, setNameData] = useState('user');
  // const { errorMessage, handleErrors, clearErrorMessage } = useErrorHandling()
  // const [statusbutton, setStatusButton] = useState(StatusButton.Disabled);
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0();
  //=============  INIT ============= 
  const init = async () => {
    dispatch(ChangeIsBack({
      isBack: false,
    }))
    setNameData('sasad')
  }
  useEffect(() => {
    init();
    // repeat();
  });

  //=============  INIT ============= 



  return (


    <div className="px-5 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }} >
      {user !== '' ? <div className="w-full flex justify-center">
        <span className="text-center font-normal text-xs">
          Hola, {user}
        </span>
      </div> : <></>}
      <h1 className="titleTxt mt-3">
        Balance
      </h1>
      <div className="flex flex-col items-center justify-center">
        <img src={iconCk} alt="" className="mt-10 h-[170px]" />
        <span className="text-grayBold font-bold text-5xl mt-10">0.0043</span>
        <span className="text-grayBold text-3xl mt-5">ckBTC</span>

      </div>
      <div className="bg-splash w-full h-20 absolute bottom-1 left-0">
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <div className="flex flex-row items-center justify-around">
          <div className="bg-purple text-globalWhite rounded w-32 h-16 flex flex-col justify-center items-center">
            <FaArrowDown size={30} />
            <span>Depositar</span>
          </div>
          <div className="bg-pink text-globalWhite rounded w-32 h-16 flex flex-col justify-center items-center">
            <FaArrowUp size={30} />
            <span>Enviar</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BalancePage;