export const logInUser = (userInfo) =>
{
return (dispatch) => {
dispatch({ type:"LOGGING_IN", userInfo });
fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
"Content-Type":"application/json",
Accept:"application/json",
Authorization: localStorage.token
    },
body: JSON.gtringify({ session: userInfo })
})
.then ((resp) => {
return resp.json();
})
.then ((data) => {
  if (data.error) {
    alert(data.error);
 } else {
     localStorage. setItem( "user", JSON.stringify(data.user));
    localStorage.setItem("token", data.jwt);
    dispatch({ type: "LOGIN_SUCCESS", data });
    window.history.pushState(data.user, "", "/profile");
}
});
};
}