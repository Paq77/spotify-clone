import { Song } from "../../types/song";
import Image from "next/image";


type sidebarSongProps = {
    song: Song,
    idx: Number
}

export const SidebarSong = ( {song, idx}: sidebarSongProps) => {
    return (
      <>
      <div key={idx} className="flex flex-col mb-2 hover:bg-neutral-800/50 p-3" >
          <div className="flex flex-row items-center mb-2">
            <div className="min-w-[50px] min-h-[50px] pr-2">
              <Image
                  src={"/images/placeholder.jpg"}
                  alt={song.name}
                  className="object-cover"
                  width={50}
                  height={50}
                />
            </div>
            <span className="text-base">{song.name}</span>
          </div>
        <span className="text-sm flex flex-row items-center place-content-between text-gray-400">
            {song.artist} 
            <svg className="mx-3" width="7" height="7" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>
            {song.genre}</span>
      </div>
      
      </>
    );
  };