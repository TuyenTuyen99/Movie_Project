import { useEffect, useState } from "react";
import Account from "../components/Account";
import api from "../config/api";

function UserInfo() {
  const user = Account();
  return <h1>Hello {user.fullName}</h1>
}

export default UserInfo;
