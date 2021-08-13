import { Redirect, Route } from "react-router-dom";
export default function PrivateRoute({ children, ...rest }) {
  const user = JSON.parse(sessionStorage.getItem("userInfo"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.user?.uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
