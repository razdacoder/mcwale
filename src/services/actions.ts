"use server";

import { slugify } from "@/lib/utils";
import { loginSchema, productSchema } from "@/schemas/formSchemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const loginUser = async (values: z.infer<typeof loginSchema>) => {
  const cookieStore = cookies();
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  cookieStore.set("session_token", data.token);
  return data;
};

export const createProduct = async (
  values: z.infer<typeof productSchema>,
  category_id: string,
  images: string[]
) => {
  const cookieStore = cookies();
  const data = {
    ...values,
    slug: slugify(values.title),
    images: images,
    category_id,
  };
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not create product");
    }

    return await response.json();
  } catch (error: any) {
    return error.message;
  }
};

export const updateProduct = async (
  slug: string,
  values: z.infer<typeof productSchema>,
  images: string[]
) => {
  const cookieStore = cookies();
  const data = {
    ...values,
    images: images,
  };
  try {
    const response = await fetch(`${BASE_URL}/products/${slug}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not update product");
    }

    return await response.json();
  } catch (error: any) {
    return error.message;
  }
};

export const deleteProduct = async (slug: string) => {
  const cookieStore = cookies();
  const { isValid } = await validateRequest();
  if (isValid) {
    const response = await fetch(`${BASE_URL}/products/${slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not delete product");
    }

    return null;
  } else {
    return redirect("/auth/login");
  }
};

// Categories Stuff

export const deleteCategory = async (slug: string) => {
  const cookieStore = cookies();
  const { isValid } = await validateRequest();
  if (isValid) {
    const response = await fetch(`${BASE_URL}/categories/${slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not delete category");
    }

    return null;
  } else {
    return redirect("/auth/login");
  }
};

export const createCategory = async (values: {
  title: string;
  styles: string[];
  slug: string;
  image: string;
}) => {
  const cookieStore = cookies();
  const { isValid } = await validateRequest();
  if (isValid) {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not create category");
    }

    return await response.json();
  } else {
    return redirect("/auth/login");
  }
};

export const updateCategory = async (
  slug: string,
  values: {
    title: string;
    styles: string[];
    image: string;
  }
) => {
  const cookieStore = cookies();
  const { isValid } = await validateRequest();
  if (isValid) {
    const response = await fetch(`${BASE_URL}/categories/${slug}`, {
      method: "PATCH",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not update category");
    }

    return await response.json();
  } else {
    return redirect("/auth/login");
  }
};

export const updateOrderStatus = async (id: string, status: string) => {
  const cookieStore = cookies();
  const { isValid } = await validateRequest();
  if (isValid) {
    const response = await fetch(`${BASE_URL}/orders/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not update order");
    }

    return await response.json();
  } else {
    return redirect("/auth/login");
  }
};

export const deleteOrder = async (id: string) => {
  const cookieStore = cookies();
  const { isValid } = await validateRequest();
  if (isValid) {
    const response = await fetch(`${BASE_URL}/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Could not delete order");
    }

    return null;
  } else {
    return redirect("/auth/login");
  }
};
// Auth Stuff

export const validateRequest = async (): Promise<{ isValid: boolean }> => {
  const cookieStore = cookies();
  try {
    const response = await fetch(`${BASE_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("session_token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error");
    }

    return { isValid: true };
  } catch (error) {
    return { isValid: false };
  }
};
