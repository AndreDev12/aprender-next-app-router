// Client Component
// import Search from './search';
// Server Component
// import Logo from './logo';

import ThemeProvider from './theme-provider';

// Layout is a Server Component by default
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="min-h-full flex flex-col">
          <ThemeProvider>
            <nav>
              {/* <Logo />
            <Search /> */}
            </nav>
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
