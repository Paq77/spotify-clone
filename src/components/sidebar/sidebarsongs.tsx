import { Song } from "../../types/song";
import { SidebarSong } from "./sidebarsong";


export const SidebarSongs = ( {songs}: Array<Song> ) => {
    return (
      <>
        {songs.map( (song: Song, idx: Number) => 
            (<>
            <SidebarSong song={song} key={idx}></SidebarSong>
            </>
            )
        )}
      </>
    );
  };