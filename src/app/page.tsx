import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";
import { env } from "process";


async function fetchSongs() {
  const data = await fetch('https://api.mockapi.com/api/v1/songs', {
    method: 'GET',
    headers: {
        'x-api-key': env["API_KEY"]
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
