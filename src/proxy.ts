import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fa"],
  defaultLocale: "fa",
});

export const config = {
  // Matcher: Ignore static files, images, etc.
  matcher: ["/", "/(fa|en)/:path*"],
};
