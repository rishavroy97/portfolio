import DropdownMenu from "./DropdownMenu";
import Name from "./Name";
import NavList from "./NavList";
import TinyImg from "./TinyImg";
import ToggleTheme from "./ToggleTheme";

const Navigation = () => {
    return (
        <>
            <header className="navbar bg-base-300 justify-between rounded-md px-4 w-[70vw] hidden lg:flex">
                <div className="flex gap-4">
                    <TinyImg />
                    <Name />
                </div>
                <div className="gap-2">
                    <NavList />
                </div>
                <ToggleTheme />
            </header>

            <header className="navbar bg-base-300 justify-center rounded-md w-[90vw] lg:hidden">
                <TinyImg />
                <Name />
                <DropdownMenu />
                <ToggleTheme />
            </header>
        </>
    )
}

export default Navigation
