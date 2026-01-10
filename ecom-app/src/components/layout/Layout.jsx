import Header from "./Header";

export default function Layout({ children, cartCount }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="container">{children}</main>
    </>
  );
}
