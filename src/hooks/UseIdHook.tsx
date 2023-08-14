import React, { useEffect, useId } from "react";

export default function UseIdHook() {
  const id = useId();
  console.log(id);
  return <div></div>;
}
