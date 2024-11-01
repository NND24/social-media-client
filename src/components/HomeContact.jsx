import Image from "next/image";
import { BsThreeDots, BsSearch } from "react-icons/bs";

const HomeContact = () => {
  const currentUser = {
    _id: "1212",
    avatar: [],
    fullName: "Đạt Nguyễn",
  };

  return (
    <div className='sticky top-[56px] left-0 h-[calc(100vh-56px)] overflow-auto overflow-x-hidden home-nav'>
      <div className='flex flex-col py-[15px]'>
        <div className=''>
          <div className='flex items-center justify-between'>
            <h4 className='text-[18px] font-medium text-[#65676b]'>Người liên hệ</h4>
            <div className='flex gap-[10px] mr-[12px]'>
              <BsSearch className='text-[#65676b] rounded-full p-[6px] text-[28px] cursor-pointer hover:bg-[#e4e6e9]' />
              <BsThreeDots className='text-[#65676b] rounded-full p-[6px] text-[28px] cursor-pointer hover:bg-[#e4e6e9]' />
            </div>
          </div>
          {currentUser && (
            <div className='w-full p-[10px] rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer'>
              <div className='relative hover:bg-[#e4e6e9]'>
                <Image
                  width={28}
                  height={28}
                  loading='lazy'
                  alt='profile pic'
                  src={"/images/defaultAvatar.png"}
                  className='object-cover rounded-full cursor-pointer'
                />
                <div className='absolute bottom-[5px] right-0 w-[6px] h-[6px] bg-green-700 rounded-full'></div>
              </div>
              <p className='font-medium text-[#050505]'>Dat</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
