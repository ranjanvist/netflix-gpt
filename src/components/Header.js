import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Login from "./Login";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="px-8 py-2 absolute top-0 left-0 w-screen bg-gradient-to-b from-black z-10 h-[56px]">
      <div className="flex items-center justify-between">
        <img
          src="/png-transparent-netflix.png"
          alt="tet"
          className="w-[148px] h-[40px]"
        />
        {user && (
          <p>
            {user.displayName}{" "}
            <button
              onClick={handleSignOut}
              className="font-bold bg-red-700 text-white  px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
          </p>
        )}
      </div>
    </div>
  );
};
export default Header;
