import { inter } from './layout';

import NavBar from './navbar';
export function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
 {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar></NavBar>
        {children}
        </body>
    </html>
  );
}