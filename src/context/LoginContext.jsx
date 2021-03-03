import React, { useState, useEffect, createContext } from 'react';

const getLoginInfoFromStorage = localStorage.getItem('zzomssa_loggined')==="true";
const getProfileIdInfoFromStorage = localStorage.getItem('zzomssa_profile_id');
const getProfileNickNameInfoFromStorage = localStorage.getItem(
  'zzomssa_profile_name',
);

const loginInitialState = {
  isLogged: getLoginInfoFromStorage,
  profileId: getProfileIdInfoFromStorage,
  profileNickName: getProfileNickNameInfoFromStorage,
  setIsLogged: () => {},
  setProfileId: () => {},
  setProfileNickName: () => {},
};

const LoginContext = createContext(loginInitialState);

const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(getLoginInfoFromStorage);
  const [profileId, setProfileId] = useState(getProfileIdInfoFromStorage);
  const [profileNickName, setProfileNickName] = useState(
    getProfileNickNameInfoFromStorage,
  );

  const value = {
    isLogged,
    setIsLogged,
    profileId,
    setProfileId,
    profileNickName,
    setProfileNickName,
  };

  useEffect(() => {
    localStorage.setItem('zzomssa_loggined', isLogged);
  }, [isLogged]);

  useEffect(() => {
    localStorage.setItem('zzomssa_profile_id', profileId);
  }, [profileId]);

  useEffect(() => {
    localStorage.setItem('zzomssa_profile_name', profileNickName);
  }, [profileNickName]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;

export { LoginProvider };
