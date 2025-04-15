import "./globals.css";
import Layout from "./components/layout";
import { ShoppingCartContextProvider } from "./Context/ShoppingCartContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShoppingCartContextProvider>
          <Layout>{children}</Layout>
        </ShoppingCartContextProvider>
      </body>
    </html>
  );
}
