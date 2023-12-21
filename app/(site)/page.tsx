import Posts from "@/components/Posts";
import Hero from "@/components/mainPage/Hero";
import LatestPosts from "@/components/mainPage/LatestPosts";
import SideBar from "@/components/sideBar/SideBar";

export default async function Home() {
  return (
    <main className=''>
      <Hero />
      <div className='2xsmall:mx-[2px] xsmall:mx-[2rem] small:mx-[4rem] large:mx-[6rem]'>
        <Posts />
      </div>
    </main>
  );
}
