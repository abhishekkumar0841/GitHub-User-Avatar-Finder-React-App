import React from "react";

const UserCard = ({ userName, avatarUrl }) => {
  return (
    <div className=" w-[23%] h-[23%] flex items-center justify-center">
      <div className="w-[95%] h-[95%] rounded-md overflow-hidden relative">
        <img className="w-full h-full" src={avatarUrl} alt="" />
        <div className='bg-gray-200 text-center p-1 uppercase'>
          <h2 className="text-lg font-bold tracking-widest"> {userName} </h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
