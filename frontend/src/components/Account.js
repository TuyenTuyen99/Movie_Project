import { useEffect, useState } from "react";
import api from "../config/api";

function Account() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");

        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return user;
}

export default Account;
