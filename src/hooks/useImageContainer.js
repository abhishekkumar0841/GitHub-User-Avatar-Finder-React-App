import { useEffect, useState } from "react";

const useImageContainer = () => {
  const [imageContainer, setImageContainer] = useState({
    loading: false,
    usersData: [],
  });

  async function fetchUsersData() {
    setImageContainer((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setImageContainer((prev) => ({
        ...prev,
        usersData: data,
      }));
    } catch (error) {
      console.log("Something Went Wrong");
      setImageContainer((prev) => ({
        ...prev,
        usersData: [],
      }));
    }
    setImageContainer((prev) => ({
      ...prev,
      loading: false,
    }));
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  return [imageContainer]

};

export default useImageContainer;
