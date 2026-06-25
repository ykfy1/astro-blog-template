import { defineConfig } from "astro/config"
export default defineConfig({
  i18n: {
    locales: ["es", "zh", "fr"],
    locales: ["es", "zh", {
      path: "french", // 不包含斜杠
      codes: ["fr", "fr-BR", "fr-CA"]
    }],
    defaultLocale: "zh",
    routing: {
        prefixDefaultLocale: true
    }
  }
})
