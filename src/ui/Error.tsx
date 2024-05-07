import { useRouteError } from "react-router-dom";

export default function Error() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}
