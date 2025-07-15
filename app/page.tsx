"use client";

import { AppHeader } from "@/shared/components/app-header";
import { ProductMenu } from "@/shared/components/products-menu/product-menu";
import { Provider } from "react-redux";
import { store } from "@/shared/services/store";
import { Filters } from "@/shared/components/filters";
import { ProductList } from "@/shared/components/products-list";

export default function Home() {
  return (
    <Provider store={store}>
      <AppHeader />
      <ProductMenu />
      <main className="grid grid-cols-[min-content_1fr] gap-15 mt-10">
        <Filters />
        <ProductList />
      </main>
    </Provider>
  );
}
