"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function RegisterFormBlock() {
  const [password, setPassword] = useState("");

  const [repeatPassword, setRepeatPassword] = useState("");

  const [phone, setPhone] = useState("");

  const [showPasswordErrors, setShowPasswordErrors] = useState(false);

  const [showRepeatError, setShowRepeatError] = useState(false);

  const [showPhoneError, setShowPhoneError] = useState(false);

  // password checks
  const hasMinLength = password.length >= 8;

  const hasLetter = /[a-zA-Z]/.test(password);

  const passwordValid = hasMinLength && hasLetter;

  // password match
  const passwordsMatch =
    repeatPassword.length > 0 && password === repeatPassword;

  // iran phone validation
  const iranPhoneRegex = /^09\d{9}$/;

  const phoneValid = iranPhoneRegex.test(phone);

  // full form validation
  const formValid = passwordValid && passwordsMatch && phoneValid;

  // delayed password validation
  useEffect(() => {
    if (!password.length) {
      setShowPasswordErrors(false);

      return;
    }

    const timeout = setTimeout(() => {
      setShowPasswordErrors(!passwordValid);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [password, passwordValid]);

  // delayed repeat validation
  useEffect(() => {
    if (!repeatPassword.length) {
      setShowRepeatError(false);

      return;
    }

    const timeout = setTimeout(() => {
      setShowRepeatError(!passwordsMatch);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [repeatPassword, passwordsMatch]);

  // delayed phone validation
  useEffect(() => {
    if (!phone.length) {
      setShowPhoneError(false);

      return;
    }

    const timeout = setTimeout(() => {
      setShowPhoneError(!phoneValid);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [phone, phoneValid]);

  return (
    <div
      className="
        w-full max-w-xl
        rounded-3xl border border-white/10
        bg-zinc-900/40
        p-6 sm:p-8
        backdrop-blur-xl
      "
    >
      {/* header */}
      <div className="mb-8 text-right">
        <h2 className="text-2xl font-bold text-white">ایجاد حساب کاربری</h2>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          اطلاعات خود را وارد کنید تا حساب کاربری شما ساخته شود.
        </p>
      </div>

      <form className="space-y-4">
        {/* names */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="نام"
            className="
              h-14 w-full
              rounded-xl border border-white/10
              bg-white/5
              px-4
              text-right text-white
              outline-none
              transition-all duration-200
              placeholder:text-zinc-500
              focus:border-white/20
              focus:bg-white/[0.07]
            "
          />

          <input
            type="text"
            placeholder="نام خانوادگی"
            className="
              h-14 w-full
              rounded-xl border border-white/10
              bg-white/5
              px-4
              text-right text-white
              outline-none
              transition-all duration-200
              placeholder:text-zinc-500
              focus:border-white/20
              focus:bg-white/[0.07]
            "
          />
        </div>

        {/* phone */}
        <div>
          <input
            type="tel"
            placeholder="شماره موبایل"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`
              h-14 w-full
              rounded-xl border
              bg-white/5
              px-4
              text-right text-white
              outline-none
              transition-all duration-300
              placeholder:text-zinc-500
              focus:bg-white/[0.07]

              ${
                showPhoneError
                  ? "border-red-500/50 focus:border-red-500/70"
                  : "border-white/10 focus:border-white/20"
              }
            `}
          />

          <AnimatePresence>
            {showPhoneError && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="mt-2 text-right text-xs text-red-400"
              >
                شماره موبایل معتبر نیست
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* password */}
        <div>
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`
              h-14 w-full
              rounded-xl border
              bg-white/5
              px-4
              text-right text-white
              outline-none
              transition-all duration-300
              placeholder:text-zinc-500
              focus:bg-white/[0.07]

              ${
                showPasswordErrors
                  ? "border-red-500/50 focus:border-red-500/70"
                  : "border-white/10 focus:border-white/20"
              }
            `}
          />

          <AnimatePresence>
            {showPasswordErrors && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  mt-2 space-y-1
                  text-right text-xs
                "
              >
                {!hasMinLength && (
                  <p className="text-red-400">
                    رمز عبور باید حداقل ۸ کاراکتر باشد
                  </p>
                )}

                {!hasLetter && (
                  <p className="text-red-400">
                    رمز عبور باید شامل حروف انگلیسی باشد
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* repeat password */}
        <div>
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className={`
              h-14 w-full
              rounded-xl border
              bg-white/5
              px-4
              text-right text-white
              outline-none
              transition-all duration-300
              placeholder:text-zinc-500
              focus:bg-white/[0.07]

              ${
                showRepeatError
                  ? "border-red-500/50 focus:border-red-500/70"
                  : "border-white/10 focus:border-white/20"
              }
            `}
          />

          <AnimatePresence>
            {showRepeatError && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="mt-2 text-right text-xs text-red-400"
              >
                رمزهای عبور مطابقت ندارند
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* submit */}
        <button
          type="submit"
          disabled={!formValid}
          className={`
            h-14 w-full rounded-xl
            text-sm font-medium
            transition-all duration-200

            ${
              formValid
                ? "bg-white text-black hover:opacity-90"
                : "cursor-not-allowed bg-white/10 text-zinc-500"
            }
          `}
        >
          ایجاد حساب
        </button>
      </form>
    </div>
  );
}
