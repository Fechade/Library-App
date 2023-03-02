import { SignIn, SignOut, auth } from "../firebase-app";
import { onAuthStateChanged } from "firebase/auth";
function NavBar() {
  const navBar = document.createElement("nav");
  NavBarStyles(navBar);

  const Logo = document.createElement("h1");
  LogoStyles(Logo);
  Logo.textContent = "LOGO";

  const Login = document.createElement("button");
  SignStyles(Login)
  const LogOut = document.createElement("button");
  SignStyles(LogOut)

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

function NavBarStyles(navBar) {
  navBar.classList.add("bg-white");
  navBar.classList.add("text-black");
  navBar.classList.add("p-6");
  navBar.classList.add("pl-20");
  navBar.classList.add("pr-20");
  navBar.classList.add("flex");
  navBar.classList.add("justify-between");
  navBar.classList.add("text-lg");
  navBar.classList.add("items-center");
  navBar.classList.add("drop-shadow-lg");
}

function SignStyles(btn) {
  btn.classList.add("bg-slate-50");
  btn.classList.add("p-3");
  btn.classList.add("pl-4");
  btn.classList.add("pr-4");
  btn.classList.add("rounded-lg");
  btn.classList.add("font-semibold");
  btn.classList.add("text-base");
}

function LogoStyles(logo) {
  logo.classList.add("font-bold")
  logo.classList.add("text-4xl")
} 

export default NavBar;