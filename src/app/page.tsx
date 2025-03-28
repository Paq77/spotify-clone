import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";
import { supabaseClient } from "@/libs/supabaseClient";

export default async function Home() {
  const { data, error } = await supabaseClient
    .storage
    .from('images')
    .list()

  console.log(data, error)
  return (
    <>
      <main className="w-screen flex justify-normal flex-row gap-y-4 overflow-y-hidden ">
        <Sidebar> </Sidebar>
        <Header></Header>
      </main>
    </>
  );
}
