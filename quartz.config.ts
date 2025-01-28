import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🏠 SWAB Tech Training",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "tech.swabuga.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Funnel Display",
        body: "Moderustic",
        code: "Parkinsans",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#dddddd",
          gray: "#0ab35a",
          darkgray: "#000000",
          dark: "#161618",
          secondary: "#4daf6d",
          tertiary: "#005a2b",
          highlight: "rgba(132, 242, 132, 0.19)",
          textHighlight: "#161618",
        },
        darkMode: {
          light: "#1E241E  ",
          lightgray: "#335b31",
          gray: "#5ab35a",
          darkgray: "#ffffff",
          dark: "#ffffff",
          secondary: "#6dbf6d",
          tertiary: "#ffffff",
          highlight: "rgba(108, 159, 99, 0.44)",
          textHighlight: "#007738",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
