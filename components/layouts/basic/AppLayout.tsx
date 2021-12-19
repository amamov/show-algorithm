import { ReactNode } from "react";
import Header from "@components/layouts/basic/AppHeader";
import Footer from "@components/layouts/basic/AppFooter";
import { AppLayoutStyle } from "./AppLayout.style";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <AppLayoutStyle.AppWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </AppLayoutStyle.AppWrapper>
  );
}

export default AppLayout;
