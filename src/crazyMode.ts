function hostname(): string | null {
  if (typeof window === "undefined") return null;
  const host = window.location?.hostname;
  return typeof host === "string" ? host.toLowerCase() : null;
}

/** True when this page is the GitHub Pages deploy. That build must not load a portal SDK. */
export function isGithubPagesHost(): boolean {
  const host = hostname();
  if (!host) return false;
  return host === "github.io" || host.endsWith(".github.io");
}

export function isCrazyGamesHost(): boolean {
  const host = hostname();
  if (!host) return false;
  return host === "crazygames.com" || host.endsWith(".crazygames.com");
}

/**
 * CrazyGames presentation: a crazygames.com host, or an explicit ?portal=crazygames
 * preview. The normal Pages, itch, and Discord links do not set that query.
 */
export function isCrazyGamesMode(): boolean {
  if (isCrazyGamesHost()) return true;
  if (typeof window === "undefined") return false;
  try {
    return new URLSearchParams(window.location.search).get("portal") === "crazygames";
  } catch {
    return false;
  }
}
