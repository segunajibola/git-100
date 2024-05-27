import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const subscribeToConvertKit = async (email: string) => {
  const formId = process.env.NEXT_PUBLIC_FORM_ID;
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;

  const data = {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    email,
  };

  console.log("data", data);
  console.log("formId", formId);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to subscribe to ConvertKit");
  }

  // console.log("res", response.json());
  return response.json();
};
