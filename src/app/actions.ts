"use server";

type FormState = {
  message: string;
};

export async function exampleAction(prevState: FormState, formData: FormData) {
  const name = formData.get("name");

  if (!name || typeof name !== "string") {
    return {
      message: "VALIDATION_ERROR",
    };
  }

  return {
    message: `Hello, ${name}!`,
  };
}
