"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaMagnifyingGlass,
  FaRightFromBracket,
  FaXmark,
  FaArrowLeft,
  FaBars,
  FaBell,
  FaFacebookMessenger,
  FaMoon,
  FaPlus,
} from "react-icons/fa6";
import {
  HiBuildingStorefront,
  HiOutlineBuildingStorefront,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiUserGroup,
  HiUsers,
} from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { PiMonitorPlay, PiMonitorPlayFill } from "react-icons/pi";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [openChatModal, setOpenChatModal] = useState(false);
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [active, setActive] = useState();
  const [searchInput, setSearchInput] = useState("");

  const searchBoxRef = useRef(null);

  const currentUser = false;

  const handleLinkClick = (path) => {
    setActive(path);
  };

  const handleClickOutside = (e) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setOpenSearchBox(false);
      dispatch(resetSearchUser());
    }
  };

  return (
    <div className='fixed top-0 right-0 left-0 z-[99]' onClick={handleClickOutside}>
      <div
        className='relative px-[16px] h-[56px] flex items-center text-[#ffffff]'
        style={{
          boxShadow: "0 0 4px #ccc",
        }}
      >
        <>
          <div className='absolute flex flex-row items-center gap-[8px] w-[320px]'>
            <Link href='/'>
              <Image
                width={40}
                height={40}
                loading='lazy'
                alt='logo'
                src='/images/facebook-logo.png'
                className='w-[40px] h-[40px] object-cover rounded-full cursor-pointer'
              />
            </Link>
            <div
              className='flex items-center rounded-[50px] bg-[#e4e6eb]'
              onClick={() => {
                setOpenSearchBox(true);
                setOpenAccountModal(false);
                setOpenChatModal(false);
              }}
            >
              <div className='text-[#65676b] rounded-full p-[8px] cursor-pointer flex'>
                <FaMagnifyingGlass className='text-[20px] text-[#65676b] p-0 m-0 rounded-0' />
              </div>
              <input
                readOnly
                type='text'
                placeholder='Tìm kiếm trên Facebook'
                className='h-[40px] text-[14px] py-[8px] pr-[33px] rounded-[50px] bg-[#e4e6eb]'
              />
            </div>
            {openSearchBox && (
              <div
                className='fixed top-0 left-0 bg-[#ffffff] p-[10px] w-[360px] rounded-bl-[10px] rounded-br-[10px] z-1'
                style={{
                  boxShadow: "0 0 4px #ccc",
                }}
                ref={searchBoxRef}
              >
                <div className='flex items-center flex-row gap-[6px] h-[56px]'>
                  <FaArrowLeft
                    onClick={() => {
                      setOpenSearchBox(false);
                      dispatch(resetSearchUser());
                    }}
                    className='p-[6px] text-[30px] rounded-full text-[#050505] cursor-pointer hover:bg-[#e4e6e9]'
                  />
                  <input
                    type='text'
                    placeholder='Tìm kiếm trên Facebook'
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='h-[40px] text-[14px] p-[8px] bg-[#e4e6eb] text-[#050505] rounded-[50px] w-full'
                  />
                </div>
                <div className='mt-[10px] mx-h-[465px] overflow-y-auto header-scrollbar'>
                  {/* {searchedUser &&
                    searchedUser.map((user) => (
                      <Link
                        href={`/profile/`}
                        onClick={() => {
                          setOpenSearchBox(false);
                          dispatch(resetSearchUser());
                        }}
                        className='flex flex-row items-center gap-[8px] p-[6px] rounded-[6px] cursor-pointer'
                        key={user._id}
                      >
                        <div className='w-[40px] h-[40px] rounded-full'>
                          <img
                            loading='lazy'
                            alt='profile img'
                            src={user.avatar[0].url}
                            className='w-full h-full object-cover rounded-full'
                          />
                        </div>
                        <div>
                          <p className='font-medium text-[#050505]'>{user.fullName}</p>
                        </div>
                      </Link>
                    ))} */}
                </div>
              </div>
            )}
          </div>
          <div className='w-full h-full flex items-center justify-center'>
            <Link
              href='/'
              className={`relative w-[9%] h-[85%] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e4e6e9] hide-on-tablet-mobile ${
                active === "" && "active-nav"
              }`}
              data-title='Trang chủ'
              onClick={() => handleLinkClick("")}
            >
              {active === "" ? (
                <IoHomeSharp className='text-[#65676b] text-[26px]' />
              ) : (
                <IoHomeOutline className='text-[#65676b] text-[26px]' />
              )}
            </Link>
            <Link
              href='/watch'
              className={`relative w-[9%] h-[85%] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e4e6e9] hide-on-tablet-mobile ${
                active === "watch" && "active-nav"
              }`}
              data-title='Video'
              onClick={() => handleLinkClick("watch")}
            >
              {active === "watch" ? (
                <PiMonitorPlayFill className='text-[#65676b] text-[26px]' />
              ) : (
                <PiMonitorPlay className='text-[#65676b] text-[26px]' />
              )}
            </Link>
            <Link
              href='/marketplace'
              className={`relative w-[9%] h-[85%] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e4e6e9] hide-on-tablet-mobile ${
                active === "marketplace" && "active-nav"
              }`}
              data-title='Marketplace'
              onClick={() => handleLinkClick("marketplace")}
            >
              {active === "marketplace" ? (
                <HiBuildingStorefront className='text-[#65676b] text-[26px]' />
              ) : (
                <HiOutlineBuildingStorefront className='text-[#65676b] text-[26px]' />
              )}
            </Link>
            <Link
              href='/friends'
              className={`relative w-[9%] h-[85%] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e4e6e9] hide-on-tablet-mobile ${
                active === "friends" && "active-nav"
              }`}
              data-title='Bạn bè'
              onClick={() => handleLinkClick("friends")}
            >
              {active === "friends" ? (
                <HiUsers className='text-[#65676b] text-[26px]' />
              ) : (
                <HiOutlineUsers className='text-[#65676b] text-[26px]' />
              )}
            </Link>
            <Link
              href='/groups'
              className={`relative w-[9%] h-[85%] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e4e6e9] hide-on-small-laptop hide-on-tablet-mobile  ${
                active === "groups" && "active-nav"
              }`}
              data-title='Nhóm'
            >
              {active === "groups" ? (
                <HiUserGroup className='text-[#65676b] text-[26px]' />
              ) : (
                <HiOutlineUserGroup className='text-[#65676b] text-[26px]' />
              )}
            </Link>
            <div
              className={`relative w-[9%] h-[85%] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e4e6e9] show-on-small-laptop show-on-tablet-mobile hide-on-mobile`}
              style={{ display: "none" }}
              data-title='Xem thêm'
            >
              <FaBars />
            </div>
          </div>
        </>

        <div className='absolute right-[16px] flex items-center gap-[8px]'>
          <div
            className='relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e4e6eb] show-on-small-laptop show-on-tablet-mobile'
            style={{ display: "none" }}
            data-title='Tạo'
          >
            <FaPlus className='text-[22px] cursor-pointer text-[#050505]' />
          </div>
          <div
            className='relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e4e6eb] hide-on-small-laptop hide-on-tablet-mobile'
            data-title='Menu'
          >
            <TbGridDots className='text-[22px] cursor-pointer text-[#050505]' />
          </div>
          {pathname !== "messages" && (
            <div
              className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e4e6eb] ${
                openChatModal && "active-control"
              }`}
              data-title='Messenger'
              onClick={() => {
                setOpenChatModal(!openChatModal);
                dispatch(getChats());
                setOpenSearchBox(false);
                setOpenAccountModal(false);
              }}
            >
              <FaFacebookMessenger className='text-[22px] cursor-pointer text-[#050505]' />
            </div>
          )}
          <div
            className='relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e4e6eb]'
            data-title='Thông báo'
          >
            <FaBell className='text-[22px] cursor-pointer text-[#050505]' />
          </div>
          <div
            className='relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e4e6eb] account'
            data-title='Tài khoản'
            onClick={() => {
              setOpenAccountModal(!openAccountModal);
              setOpenSearchBox(false);
              setOpenChatModal(false);
            }}
          >
            {currentUser ? (
              <Image
                width={40}
                height={40}
                loading='lazy'
                src='/images/facebook-logo.png'
                alt=''
                className='w-[40px] h-[40px] object-cover rounded-full cursor-pointer border-[0.5px] border-[#e4e6eb]'
              />
            ) : (
              <Skeleton
                className='text-[22px] cursor-pointer text-[#050505]'
                circle
                height='100%'
                containerClassName='avatar-skeleton'
              />
            )}
          </div>
        </div>

        {openAccountModal && (
          <div
            className='absolute top-[52px] right-[15px] bg-[#ffffff] p-[15px] rounded-[10px] w-[345px]'
            style={{
              boxShadow: "0 0 4px #ccc",
            }}
          >
            <Link
              href={`/profile/`}
              className='flex items-center gap-[10px] font-medium py-[8px] px-[10px] rounded-[10px] cursor-pointer hover:bg-[#e4e6e9] '
              onClick={() => setOpenAccountModal(!openAccountModal)}
            >
              <img
                loading='lazy'
                src={"/images/facebook-logo.png"}
                alt=''
                className='w-[40px] h-[40px] object-cover rounded-full border-[0.5px] border-[#e4e6eb]'
              />
              <p className='text-[#050505]'>Đạt Nguyễn</p>
            </Link>
            <div className='flex items-center gap-[10px] font-medium py-[8px] px-[10px] rounded-[10px] cursor-pointer hover:bg-[#e4e6e9] '>
              <div className='flex rounded-full p-[8px] bg-[#e4e6eb]'>
                <FaMoon className='text-[21px] color-[#050505]' />
              </div>
              <p className='text-[#050505]'>Chế độ tối</p>
              <label className='relative inline-block w-[60px] h-[34px] ml-auto'>
                <input type='checkbox' className='w-0 h-0 opacity-0' />
                <span className='slider round'></span>
              </label>
            </div>
            <div className='flex items-center gap-[10px] font-medium py-[8px] px-[10px] rounded-[10px] cursor-pointer hover:bg-[#e4e6e9] '>
              <div className='flex rounded-full p-[8px] bg-[#e4e6eb]'>
                <FaRightFromBracket className='text-[21px] color-[#050505]' />
              </div>
              <p className='text-[#050505]'>Đăng xuất</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
