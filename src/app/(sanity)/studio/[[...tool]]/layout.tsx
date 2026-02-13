export const metadata = {
  title: "Next.js 14 Portfolio Studio",
  description: "Manage your portfolio content with Sanity",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
