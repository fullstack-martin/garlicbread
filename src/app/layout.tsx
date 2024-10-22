import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Garlic Bread Tool",
  description: "Improve your software descriptions using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
