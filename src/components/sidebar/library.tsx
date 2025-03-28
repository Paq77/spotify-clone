import { Song } from "../../types/song";
import { SidebarHeader } from "./header";
import { SidebarSongs } from "./songs";

export const Library = ( {songs}: Array<Song>) => {
    return (
      <>
      <div className="bg-[#191919] p-4 rounded-md overflow-auto">
        <SidebarHeader></SidebarHeader>
        <SidebarSongs songs={songs}></SidebarSongs>
      </div>
      </>
    );
  };