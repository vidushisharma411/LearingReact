import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Oooopss!!!!</h2>
      <h3>Something went wrong</h3>
      <h1>Error aagyoo Bhaiya 🤦‍♀️</h1>
      <h3>{err.status} : {err.statusText}</h3>
    </div>
  );
};




export default Error ;

// useRouterError is a hook and by using it we can  