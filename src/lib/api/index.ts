import { createUserMutation } from "./mutations/user";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface CreateUserInput {
  name: string;
  username: string;
  email: string;
}

interface GraphQLResponse {
  data?: {
    createUser: User;
  };
  errors?: any[];
}

export const createUser = async (
  input: CreateUserInput
): Promise<User | undefined> => {
  try {
    const response = await fetch("https://graphqlzero.almansi.me/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: createUserMutation,
        variables: {
          input: input,
        },
      }),
    });

    const data: GraphQLResponse = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL Error: ${data.errors[0].message}`);
    }

    return data.data?.createUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
