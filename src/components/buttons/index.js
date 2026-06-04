import fs from "fs";
import path from "path";

import GlowButton from "./GlowButton";
import GlassButton from "./GlassButton";
import LayerButton from "./LayerButton";

const buttonsDir = path.join(process.cwd(), "src/components/buttons");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(buttonsDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

export const buttons = [
  {
    name: "GlassButton",
    component: GlassButton,
    code: getCode("GlassButton"),
    meta: {
      title: "Glass Button",
      description: "دکمه‌ای با ظاهر شیشه‌ای و طراحی مینیمال",
      order: 1,
    },
  },
  {
    name: "LayerButton",
    component: LayerButton,
    code: getCode("LayerButton"),
    meta: {
      title: "Layer Button",
      description: "دکمه‌ای با لایه‌های بصری برای ایجاد عمق بیشتر",
      order: 2,
    },
  },
  {
    name: "GlowButton",
    component: GlowButton,
    code: getCode("GlowButton"),
    meta: {
      title: "Glow Button",
      description:
        "دکمه‌ای که پس از چند لحظه حضور در صفحه با افکت درخشش جلب توجه می‌کند",
      order: 3,
    },
  },
];
