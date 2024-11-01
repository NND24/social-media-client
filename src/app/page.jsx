"use client";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import HomeContact from "@/components/HomeContact";
import HomeNav from "@/components/HomeNav";

export default function Home() {
  return (
    <>
      <Heading title='Trang chủ' description='' keywords='' />
      <Header />

      <div className='bg-[#f0f2f5] grid grid-cols-[22%_56%_22%] mt-[56px]'>
        <HomeNav />
        <div className=''>2</div>
        <HomeContact />
      </div>
    </>
  );
}
