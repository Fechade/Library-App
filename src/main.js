import NavBar from "./UI/NavBar";

function Container() {
    const Container = document.createElement("div");
    Container.classList.add("bg-zinc-100");
    return Container
}

document.body.appendChild(NavBar());
document.body.appendChild(Container());