import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const { message } = useRouteError();

  return <h4>{JSON.stringify(message)}</h4>;
}
