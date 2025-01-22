import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdown, setIsDropdown] = useState(false);
  const user = useSelector((store) => store.user);
  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName || "Test",
            // photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSearch = () => {
    
  };
  return (
    <div className="px-8 py-2 absolute top-0 left-0 w-screen bg-gradient-to-br from-black z-10 h-[70px] p-6">
      <div className="flex items-center justify-between">
        <img
          src="/png-transparent-netflix.png"
          alt="tet"
          className="w-[182px] h-[56px]"
        />
        <button className="px-2 py-2 bg-purple-800 text-white" onClick={handleSearch}>Search Here</button>
        {user && (
          <div className="relative">
            {" "}
            <button
              onClick={handleDropdown}
              className="font-bold bg-red-700 text-white  px-4 py-2 rounded-[50%] flex items-center"
            >
              {/* <AiOutlineUserSwitch size={30} />
              <SlArrowDown size={16} /> */}
              {user.displayName.charAt(0)}
            </button>
            {isDropdown && (
              <div className="absolute right-0 mt-3 border bg-white p-4 rounded-md shadow-md text-[#222]">
                <p className="text-lg  text-green-600 font-medium">
                  {" "}
                  {user.email}
                </p>
                <p className="font-medium mt-4 bg-red-700 text-white text-[20px]  px-4 py-2 rounded-[50%] flex items-center w-12 h-12 justify-center mx-auto">
                  {user.displayName.charAt(0)}
                </p>
                <p className="mt-4 text-center">Hi, {user.displayName}</p>
                <div className="text-center">
                  <button
                    onClick={handleSignOut}
                    className="mt-4 bg-black rounded-md px-4 mx-auto py-2 text-white"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
