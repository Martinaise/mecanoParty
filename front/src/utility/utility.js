export const getAccessTokenFromLocalStorage = () => {
  let localdata = localStorage.getItem("accessToken");
  return (localdata = JSON.parse(localdata));
};

export const setAccesTokenStorage = (succes) => {
  console.log("token", succes);
  const { token, user } = succes;
  const accessToken = { user, token: token };
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
};
