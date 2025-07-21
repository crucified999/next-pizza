"use client";

import { AppHeader } from "../../shared/components/app-header/app-header";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../../shared/services/store";

// export const metadata: Metadata = {
//   title: 'Next Pizza | Главная',
// };

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <main className="min-h-screen">
        {children}
        {modal}
      </main>
    </Provider>
  );
}
