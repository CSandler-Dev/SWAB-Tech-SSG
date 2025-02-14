import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Contact Caleb": "mailto:ito@swabuga.org",
      "Contact Madden": "mailto:executivedirector@swabuga.org",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
      }),
    ),
  ],
  right: [
    Component.Graph({
      localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 1, // how many hops of notes to display
        scale: 1, // default view scale
        repelForce: 0.4, // how much nodes should repel each other
        centerForce: 0.6, // how much force to use when trying to center the nodes
        linkDistance: 25, // how long should the links be by default?
        fontSize: 0.28, // what size should the node labels be?
        opacityScale: 1.2, // how quickly do we fade out the labels when zooming out?
        removeTags: ["#nograph"], // what tags to remove from the graph
        showTags: false, // whether to show tags in the graph
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 2,
        repelForce: 0.4,
        centerForce: 0.65,
        linkDistance: 30,
        fontSize: 0.7,
        opacityScale: 1.5,
        removeTags: ["#nograph"], // what tags to remove from the graph
        showTags: false, // whether to show tags in the graph
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
      }),
    ),
  ],
  right: [],
}
