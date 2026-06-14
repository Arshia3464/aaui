import { MetadataRoute } from "next";

export default function sitemap() {
  return [
    {
      url: "https://aaui.ir/fa",
      lastModified: new Date(),
    },
    {
      url: "https://aaui.ir/en",
      lastModified: new Date(),
    },
    {
      url: "https://aaui.ir/fa/docs",
      lastModified: new Date(),
    },
    {
      url: "https://aaui.ir/fa/components",
      lastModified: new Date(),
    },
    {
      url: "https://aaui.ir/fa/blocks",
      lastModified: new Date(),
    },
  ];
}
