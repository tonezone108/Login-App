const login = (User) => {
    return function (dispatch) {
      fetch("http://localhost:5001/auth/login", {
        method: "POST",
        body: JSON.stringify(User),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) =>
          res.json().then((data) => {
            dispatch(userLoad(data));
          })
        )
  
        .catch((error) => {
          return {
            type: "error",
            value: error,
          };
        });
    };
  };


  const signUp = (User) => {
    return function (dispatch) {
      fetch("http://localhost:5001/auth/signup", {
        method: "POST",
        body: JSON.stringify(User),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((res) =>
          res.json().then((data) => {
              console.log(data)
            // dispatch(userAdded(data));
          })
        )
  
        .catch((error) => {
          return {
            type: "error",
            value: error,
          };
        });
    };
  };


  
  const userLoad = (data) => {
    return {
      type: "LOGIN",
      value: data,
    };
  };
  

  const logout = (User) => {
    document.cookie = "loggedIn=false; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    return {
      type: "LOGOUT",
      value: User,
    };
  };

  export {
    login,
    signUp,
    userLoad,
    logout
  }