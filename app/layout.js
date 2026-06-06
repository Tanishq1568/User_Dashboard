import "./globals.css";

export const metadata = {
  title: "User Management Dashboard",
  description: "Next.js User Management Dashboard",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}