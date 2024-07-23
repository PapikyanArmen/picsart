import { IComments, INotes, SearchParams } from "@/app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
});

export const getUser = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`/users/${slug}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error; // rethrow if it's not a 404 error
  }
};

export const getUsers = async (params: SearchParams) => {
  const queryParams = [
    params._page ? `_page=${params._page}` : 1,
    params._limit ? `_limit=${params._limit}` : 10,
    params._sort ? `_sort=${params._sort}` : "",
    params._order ? `_order=${params._order}` : "",
    params.first_name_like ? `first_name_like=${params.first_name_like}` : "",
  ]
    .filter((param) => param)
    .join("&");
  const query = `/users${queryParams ? `?${queryParams}` : ""}`;

  const response = await axiosInstance.get(query);
  return {
    users: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};
// Async thunks using the provided methods
export const fetchComments = createAsyncThunk<IComments[]>(
  "comments/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/comments");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/comments", {
        text: comment,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/comments/${id}`);
      return { id, ...response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);

export const fetchNotes = createAsyncThunk<INotes[]>(
  "notes/fetchNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/notes");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);

export const addNote = createAsyncThunk(
  "notes/addNote",
  async (note: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/notes", {
        text: note,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/notes/${id}`);
      return { id, ...response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);

export const editNote = createAsyncThunk(
  "notes/editNote",
  async ({ id, text }: { id: number; text: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/notes/${id}`, {
        text,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);
