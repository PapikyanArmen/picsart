import React from "react";

export interface IUser {
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  age: number;
  actions: string[];
  image: string;
  address: string;
  user_id: string;
  id: string;
}
export interface SearchParams {
  _page?: number | null;
  _limit?: number | null;
  _sort?: string;
  _order?: string;
  first_name_like?: string;
}
export interface ITextInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IOrderComponent {
  order: SortOrder;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  sortName: string;
}
export type SortOrder = "desc" | "asc" | "default";
export interface IComments {
  id: number;
  text: string;
}
export interface INotes {
  id: number;
  text: string;
}
