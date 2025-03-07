import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";


async function fetchSongs() {
  const data = await fetch('https://api.mockapi.com/api/v1/songs', {
    method: 'GET',
    headers: {
        'x-api-key': 'f63d36e0e80f4a72ae697acae29097d9'
    }
  })
  const songs = await data.json();
  
  return songs;
}

export default async function Home() {
  const fetchedSongs = await fetchSongs()
  return (
    <>
      <main className="w-screen flex justify-center flex-col gap-y-4 overflow-y-hidden ">
        <Sidebar songs={fetchedSongs}></Sidebar>
        <Header></Header>
      </main>
      
    </>
  );
}
