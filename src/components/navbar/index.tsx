// import { MainState } from "../../redux/mainSlice";
// import { useSelector } from "react-redux";
import logo from "../../assets/images/SwaphixLogo.png";
import { useNavigate } from "react-router-dom";
import { routesNames } from "../../routes/routes";

const Navbar = () => {
  // const main = useSelector((state: { main: MainState }) => state.main);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
    // const setVisible = (value:boolean) => {
    //     dispatch(changeVisible({visible:value}));
    // };
    return (
      <div className="bg-globalWhite py-3 sm:py-4 px-3">
        <div className="flex  flex-row items-center justify-between">
          <div >
            <img src={logo} className="h-7"   onClick={()=>navigate(routesNames.init)}></img>
          </div>
        </div>
      </div>
      )
    
}
export default Navbar;