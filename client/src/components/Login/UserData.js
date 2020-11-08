import React, { useState, createContext } from "react";

const UserData = createContext();
function UserDataProvider({ children }) {
  const [userInfo, SetUserInfo] = useState({});
  return (
    <UserData.Provider value={{ userInfo, SetUserInfo }}>
      {children}
    </UserData.Provider>
  );
}

export { UserDataProvider, UserData };
