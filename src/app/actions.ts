"use server";

type FormState = {
  message: string;
};

export async function exampleFormActionState(
  prevState: FormState,
  formData: FormData
) {
  const name = formData.get("name");

  if (!name || typeof name !== "string") {
    return { message: "VALIDATION_ERROR" };
  }

  return { message: `Hello, ${name}!` };
}

export async function exampleAction(formData: FormData) {
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
