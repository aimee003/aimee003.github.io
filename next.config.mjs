/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build a fully static site into ./out — GitHub Pages serves files, not a Node server.
  output: "export",

  // Pages has no image-optimization backend, so ship images as-is.
  images: { unoptimized: true },

  // Emit /about/index.html instead of /about.html so links resolve without a server.
  trailingSlash: true,
};

export default nextConfig;
