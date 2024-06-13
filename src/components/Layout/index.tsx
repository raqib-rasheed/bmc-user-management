import Header from "../Header";
import "./index.scss";

export default function Layout({ children }: any) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
