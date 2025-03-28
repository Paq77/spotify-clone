import { SidebarLink } from "./link";
import { Library } from "./library";
import { Song } from "../../types/song"

type sidebarProps = {
    songs: Array<Song>,
    children: any
}

export function Sidebar( {songs, children}: sidebarProps) {
    return (
    <nav className="h-screen mt-2 w-[15%] flex flex-col">
        <div className ="flex flex-col m-3 mt-0 pb-5 rounded-md overflow-auto">
            <SidebarLink></SidebarLink>
            <Library songs={songs}></Library>
        </div>
    </nav>
    );
  };