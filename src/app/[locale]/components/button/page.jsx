import { useTranslations } from "next-intl";

import ComponentPreview from "@/components/Preview";

import GlassButton from "@/components/buttons/GlassButton";
import LayerButton from "@/components/buttons/LayerButton";
import GlowButton from "@/components/buttons/GlowButton";

import fs from "fs";
import path from "path";

const buttonsDir = path.join(process.cwd(), "src/components/buttons");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(buttonsDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

const glassButtonCode = getCode("GlassButton");
const layerButtonCode = getCode("LayerButton");
const glowButtonCode = getCode("GlowButton");

export default function Page() {
  const t = useTranslations("button-page");

  return (
    <div className="space-y-14">
      {/* header */}
      <div className="max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h1>

        <p className="leading-7 text-zinc-400 md:text-lg">{t("description")}</p>
      </div>

      {/* glass button */}
      <ComponentPreview
        title={t("GlassButton.title")}
        description={t("GlassButton.description")}
        code={glassButtonCode}
      >
        <GlassButton>Button</GlassButton>
      </ComponentPreview>

      {/* layer button */}
      <ComponentPreview
        title={t("LayerButton.title")}
        description={t("LayerButton.description")}
        code={layerButtonCode}
      >
        <LayerButton>Button</LayerButton>
      </ComponentPreview>

      {/* glow button */}
      <ComponentPreview
        title={t("GlowButton.title")}
        description={t("GlowButton.description")}
        code={glowButtonCode}
      >
        <GlowButton>Button</GlowButton>
      </ComponentPreview>
    </div>
  );
}
