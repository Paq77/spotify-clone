import { SidebarLink } from "./sidebarlink";
import { Library } from "./library";
import { Song } from "../../types/song"

type sidebarProps = {
    songs: Array<Song>,
    children: any
}

export function Sidebar( {songs, children}: sidebarProps) {
    return (
    <nav className="h-screen fixed top-0 left-0 w-[300px] flex flex-col">
        <div className ="flex flex-col m-3 mt-0 pb-5 rounded-md overflow-auto">
            <SidebarLink></SidebarLink>
            <Library songs={songs}></Library>
        </div>
    </nav>
    );
  };