"use server";

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
