import React, { createContext, useContext, useEffect, useState } from "react";
const StoreContext = createContext();

export default function StoreProvidder({ children }) {
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedAccountAn, setSelectedAccounAn] = useState({});
  return (
    <StoreContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        selectedAccountAn,
        setSelectedAccounAn,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  const {
    selectedUser,
    setSelectedUser,
    selectedAccountAn,
    setSelectedAccounAn,
  } = context;
  return {
    selectedUser,
    setSelectedUser,
    selectedAccountAn,
    setSelectedAccounAn,
  };
}
