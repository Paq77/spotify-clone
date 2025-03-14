import { Song } from "../../types/song";
import { SidebarSong } from "./sidebarsong";


export const SidebarSongs = ( {songs}: Array<Song> ) => {
    return (
      <>
      <div>
        {songs.map( (song: Song, idx: number) => 
            (<>
            <SidebarSong key={idx} song={song}></SidebarSong>
            </>
            )
        )}
        </div>
      </>
    );
  };