import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

const HomeNav = () => {
  const [seeMore, setSeeMore] = useState(false);

  const currentUser = {
    _id: "1212",
    avatar: [],
    fullName: "Đạt Nguyễn",
  };

  return (
    <div className='sticky top-[56px] left-0 h-[calc(100vh-56px)] overflow-auto overflow-x-hidden home-nav hide-on-small-laptop'>
      <div className='flex flex-col py-[15px] pl-[10px]'>
        <div
          className={`h-[290px] overflow-hidden ${seeMore ? "active" : ""}`}
          style={{
            transition: "height 0.01s ease",
          }}
        >
          <Link
            href={`/profile/${currentUser?._id}`}
            className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'
          >
            <div className='relative w-[28px] h-[28px]'>
              {currentUser ? (
                <Image
                  loading='lazy'
                  src={currentUser?.avatar[currentUser?.avatar.length - 1]?.url || "/images/defaultAvatar.png"}
                  alt={currentUser?.fullName}
                  className='w-full h-full object-cover rounded-full'
                  layout='fill'
                  objectFit='cover'
                />
              ) : (
                <Skeleton circle height='100%' containerClassName='avatar-skeleton' />
              )}
            </div>
            <p className='font-medium text-[#050505]'>
              {currentUser ? currentUser?.fullName : <Skeleton width={80} height={25} />}{" "}
            </p>
          </Link>

          <Link
            href='/friends'
            className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'
          >
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/friends.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Bạn bè</p>
          </Link>
          <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/timer.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Kỷ niệm</p>
          </div>
          <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/marketplace.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Marketplace</p>
          </div>
          <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/groups.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Nhóm</p>
          </div>
          <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/watch.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Video</p>
          </div>
          <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/bookmark.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Đã lưu</p>
          </div>
          <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/signage.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Bảng feed</p>
          </div>
          <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/gamepad.png'
                alt='icon'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <p className='font-medium text-[#050505]'>Chơi game</p>
          </div>
        </div>

        <div
          className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer hover:bg-[#e4e6e9]'
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? (
            <>
              <CgChevronUp className='p-[6px] text-[28px] rounded-full bg-[#e4e6eb] text-[#050505]' />
              <p className='font-medium text-[#050505]'>Ẩn bớt</p>
            </>
          ) : (
            <>
              <CgChevronDown className='p-[6px] text-[28px] rounded-full bg-[#e4e6eb] text-[#050505]' />
              <p className='font-medium text-[#050505]'>Xem thêm</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
