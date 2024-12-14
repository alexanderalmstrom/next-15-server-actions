"use client";

import { type ComponentProps, useActionState } from "react";
import { exampleAction } from "../actions";

export default function FormWithActionState(props: ComponentProps<"form">) {
  const [state, action] = useActionState(exampleAction, {
    message: "",
  });

  return (
    <form action={action} {...props}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
