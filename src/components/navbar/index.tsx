// import { MainState } from "../../redux/mainSlice";
// import { useSelector } from "react-redux";
import logo from "../../assets/images/SwaphixLogo.png";
import { useNavigate } from "react-router-dom";
import { routesNamesApp } from "../../routes/routes";
import { useDispatch } from "react-redux";
import { changeVisible } from "../../redux/mainSlice";
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  // const main = useSelector((state: { main: MainState }) => state.main);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateOption = (index: number) => {

    switch (index) {
      case 0:
        // navigate(routesNamesApp.newTransaction)
        break;
      // case 1:
      //     navigate(routesNamesApp.newTransactionCrypto)
      //     break;
    }
  }
  const setVisible = (value: boolean) => {
    dispatch(changeVisible({ visible: value }));
  };

  return (
    <div className="bg-globalWhite py-3 sm:py-4 px-3 shadow-md w-full">
      <div className="sm:w-5/6 m-auto flex  flex-row items-center justify-between">
        <div className="">
          <img src={logo} className="h-7" onClick={() => navigate(routesNamesApp.balance)}></img>
        </div>
        <div className="sm:flex  hidden flex-row justify-between" >
          <span className="desktop-option-side-bar" onClick={() => navigateOption(0)}>
            <i className="">Balance</i>
          </span>
          <span className="desktop-option-side-bar" onClick={() => navigateOption(1)}>
            <i className="">Enviar cripto</i>
          </span>
        </div>
        <div className="sm:hidden ">
          <TiThMenu size={30} onClick={() => setVisible(true)}/>
        </div>
      </div>
    </div>
  )

}
export default Navbar;