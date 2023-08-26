import React from "react";
import UserCard from "../UserCard/UserCard";
import useImageContainer from "../../hooks/useImageContainer";
import Loader from "../Loader/Loader";

const ImageContainer = () => {
  const [imageContainer] = useImageContainer();

  return (
    <div className=" max-w-[80%] m-auto">
      {imageContainer.loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : imageContainer.usersData.length < 1 ? (
        "No Data Found"
      ) : (
        <div className="flex flex-wrap gap-[1rem] items-center justify-between">
          {imageContainer.usersData.map((user) => (
            <UserCard
              key={user.id}
              userName={user.login}
              avatarUrl={user.avatar_url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
