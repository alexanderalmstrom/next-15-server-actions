"use client";

import { type ComponentProps } from "react";
import { exampleAction } from "../actions";

export default function FormWithAction(props: ComponentProps<"form">) {
  return (
    <form action={exampleAction} {...props}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
