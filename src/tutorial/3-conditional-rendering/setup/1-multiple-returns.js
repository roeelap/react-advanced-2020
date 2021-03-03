import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then(user => {
        setUser(user.login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
 
  if (isError) {
    return <h2>Error!</h2>;
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
