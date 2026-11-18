// Client Component
// import Search from './search';
// Server Component
// import Logo from './logo';

// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="min-h-full flex flex-col">
          <nav>
            {/* <Logo />
            <Search /> */}
          </nav>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
