import { Redirect } from "expo-router";

export default function Page() {
  return (
    <Redirect href={`/order/123`}/>
  );
};
