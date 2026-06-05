import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("components-page");

  return (
    <div className="max-w-3xl mb-10 space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>

        <p className="text-muted-foreground leading-7">{t("description")}</p>
      </div>

      <div className="space-y-3 text-sm text-muted-foreground">
        <p>
          • {t("previewText")}{" "}
          <span className="font-medium text-foreground">Preview</span>
        </p>

        <p>
          • {t("codeText")}{" "}
          <span className="font-medium text-foreground">Code</span>
        </p>

        <p>• {t("themeText")}</p>

        <p>
          • {t("resetText")}{" "}
          <span className="font-medium text-foreground">Reset</span>
        </p>
      </div>
    </div>
  );
}
