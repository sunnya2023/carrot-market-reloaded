"use server";

export const handleForm = async (prev: any, formData: FormData) => {
  "use server";
  console.log(prev);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ["wrong password", "password too short"],
  };
};
