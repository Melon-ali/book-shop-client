/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";
import NotificationToast from "@/components/ui/NotificationToast";

// const baseUrl = "http://localhost:5000/api/";
const baseUrl = "https://assignment-4-book-shop-server.vercel.app/api/";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    NotificationToast({
      toastId: "error",
      type: "error",
      message: (result?.error?.data as { message: string })?.message,
      destroyId: "loading",
    });
  }
  if (result?.error?.status === 403) {
    NotificationToast({
      toastId: "error",
      type: "error",
      message: (result?.error?.data as { message: string })?.message,
      destroyId: "loading",
    });
  }
  if (result?.error?.status === 401) {
    const res = await fetch(`${baseUrl}auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({ user, token: data.data.accessToken }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["users", "products", "orders", "product", "user", "order", "authors"],
});
