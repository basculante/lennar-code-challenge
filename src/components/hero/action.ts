"use server";

import { createUser } from "@/lib/api";

export async function submitStartFreeTrialAction(
  _:
    | {
        message: string;
        status?: string;
      }
    | FormData
    | undefined
    | null,
  formData: FormData
) {
  try {
    const email = formData.get("email")?.toString();

    if (!email) throw new Error("Email is required");

    const response = await createUser({
      name: "John Doe",
      username: "johndoe",
      email,
    });

    console.log("response", response);

    return {
      message: "Thank  you for starting your free trial.",
      status: "success",
    };
  } catch (err) {
    console.error(err);

    return {
      message:
        "We were unable to start your free trial at this moment. Please try again later",
      status: "danger",
    };
  }
}
