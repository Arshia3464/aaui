import fs from "fs";
import path from "path";

import IranPhoneInput from "./PhoneNumber";
import EmailInput from "./EmailInput";

const inputsDir = path.join(process.cwd(), "src/components/inputs");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(inputsDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

export const inputs = [
  {
    name: "IranPhoneInput",
    component: IranPhoneInput,
    code: getCode("PhoneNumber"),
    meta: {
      title: "ورودی شماره موبایل",
      description:
        "فیلدی برای وارد کردن شماره موبایل ایران همراه با اعتبارسنجی",
      order: 1,
    },
  },
  {
    name: "EmailInput",
    component: EmailInput,
    code: getCode("EmailInput"),
    meta: {
      title: "ورودی ایمیل",
      description: "فیلدی برای وارد کردن ایمیل همراه با بررسی معتبر بودن آن",
      order: 2,
    },
  },
];
