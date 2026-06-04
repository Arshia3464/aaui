import fs from "fs";
import path from "path";

import ContactForm from "./ContactForm";
import LoginForm from "./LoginForm";

const inputsDir = path.join(process.cwd(), "src/components/patterns");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(inputsDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

export const patterns = [
  {
    name: "ContactForm",
    component: ContactForm,
    code: getCode("ContactForm"),
    meta: {
      title: "قرم تماس",
      description: "یک فورم برای تماس شامل ورودی های متن عدد و ایمیل",
      order: 1,
    },
  },
  {
    name: "LoginForm",
    component: LoginForm,
    code: getCode("LoginForm"),
    meta: {
      title: "قرم ورود",
      description: "یک فورم برای ورود به حساب شامل ورودی های متن و پسورد",
      order: 2,
    },
  },
];
