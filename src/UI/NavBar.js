import { SignIn, SignOut, auth } from "../firebase-app";
import { onAuthStateChanged } from "firebase/auth";
function NavBar() {
  const navBar = document.createElement("nav");

  const Logo = document.createElement("h1");
  Logo.textContent = "LOGO";

  const Login = document.createElement("button");
  const LogOut = document.createElement("button");

  navBar.appendChild(Logo);
  navBar.appendChild(Login);
  navBar.appendChild(LogOut);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userName = user.displayName;
      const userPic = user.photoURL;
      navBar.appendChild(LogOut);
      navBar.removeChild(Login);
      LogOut.textContent = "Sign Out";
      LogOut.addEventListener("click", () => {
        SignOut();
      });
    } else {
      navBar.appendChild(Login);
      navBar.removeChild(LogOut);
      Login.textContent = "Log in";
      Login.addEventListener("click", () => {
        SignIn();
      });
    }
  });

  return navBar;
}

export default NavBar;
