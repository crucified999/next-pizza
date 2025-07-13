"use client";

import { AppHeader } from "@/shared/components/app-header";
import { ProductMenu } from "@/shared/components/products-menu/product-menu";
import { Provider } from "react-redux";
import { store } from "@/shared/services/store";

export default function Home() {
  return (
    <Provider store={store}>
      <AppHeader />
      <ProductMenu />
    </Provider>
  );
}
