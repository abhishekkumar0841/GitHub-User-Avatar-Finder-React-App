import React from "react";
import UserCard from "../UserCard/UserCard";
import useImageContainer from "../../hooks/useImageContainer";

const ImageContainer = () => {

    const [imageContainer] = useImageContainer()

  return (
    <div>{imageContainer.loading ?
         <div>Loading...</div> 
         : imageContainer.usersData.length < 1 ? ("No Data Found") : (
            imageContainer.usersData.map((user)=>(
                <UserCard key={user.id} userName={user.login} avatarUrl={user.avatar_url} />
            ))
         ) }
         </div>
  );
};

export default ImageContainer;
