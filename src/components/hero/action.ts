"use server";

export async function submitStartFreeTrialAction(
  _:
    | {
        message: string;
        status?: string;
      }
    | FormData
    | undefined
    | null,
  formData:
    | {
        subscriptionContractId: string;
      }
    | undefined
) {
  try {
    if (!formData) {
      return {
        message: "Missing email input",
        status: "danger",
      };
    }

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
