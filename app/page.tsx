"use client";

import { AppHeader } from "@/shared/components/app-header";
import { ProductMenu } from "@/shared/components/products-menu/product-menu";
import { Provider } from "react-redux";
import { store } from "@/shared/services/store";
import { Filters } from "@/shared/components/filters";

export default function Home() {
  return (
    <Provider store={store}>
      <AppHeader />
      <ProductMenu />
      <Filters />
    </Provider>
  );
}
