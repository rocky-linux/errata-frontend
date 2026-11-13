import { Box, Button, Text } from "@chakra-ui/react";
import { Component, type ComponentType, type ReactNode } from "react";

const RELOAD_KEY = "errata-chunk-reload-at";

/**
 * Load a page chunk; when it fails (usually a deploy replaced the hashed assets under an open
 * tab), reload the page once to pick up the new index.html. A second failure within a minute
 * is thrown to PageErrorBoundary instead of reloading in a loop.
 */
export function loadPage<T extends ComponentType<any>>(
  loader: () => Promise<T>
): () => Promise<{ default: T }> {
  return async () => {
    try {
      return { default: await loader() };
    } catch (error) {
      const last = Number(window.sessionStorage.getItem(RELOAD_KEY) || 0);
      if (Date.now() - last > 60_000) {
        window.sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
        window.location.reload();
        // Keep Suspense showing its fallback until the reload replaces the page.
        return new Promise<never>(() => undefined);
      }
      throw error;
    }
  };
}

/** Shows a message instead of unmounting the whole app when a page fails to render or load. */
export class PageErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <Box p={6}>
        <Text mb={3}>This page could not be loaded. The site may have just been updated.</Text>
        <Button size="sm" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </Box>
    );
  }
}
