# CrazyGames docs index

Source of truth for publishing Roadkeep. Fetched from the live site on 2026-10-21 (sitemap `lastmod` 2026-10-12). Do not re-fetch these pages to answer a publish question.

Tags: **Basic** = Basic Launch / Basic Implementation. **Full** = Full Launch / Full Implementation. **Portal** = Developer Portal metadata, not game code. **Guideline** = recommended, not a launch gate. **Invite** = only after CrazyGames invites the game. **Legacy** = HTML5 SDK v2; use v3.

External nav links (not docs pages, not indexed): GDevelop, Defold, Wonderland.

## Roadkeep status

Settled. Do not reopen these.

- No ads in this game. Do not add ad, banner, or rewarded calls for this resubmit. **Basic**: ads are disabled; a game that freezes or shows a dead rewarded button while ads are disabled is rejected. https://docs.crazygames.com/requirements/ads/
- Instant multiplayer is not required while solo play exists. It is **Full**, and only if online multiplayer stays in the game. https://docs.crazygames.com/requirements/multiplayer/ https://docs.crazygames.com/sdk/game/#instant-multiplayer
- iOS and Android already play smoothly. Do not retest smoothness unless a change touches input.
- CrazyGames mode is a `crazygames.com` host or `?portal=crazygames`. In that mode Play starts solo; fullscreen, F, auto-fullscreen, and Escape-as-a-game-key are removed; itch.io, X, and Copy link are removed; Discord and Privacy stay; Privacy must not link to the playable itch.io page; a skippable lesson is on the field; the SDK must not load on GitHub Pages and must not call ads.
- Upload file: `C:\Users\user\projects\roadkeep-main\roadkeep-crazygames.zip` from `npm run build:portal` (relative base `./`, `index.html` at the zip root). Last zip about 6.4 MB. Do not rebuild it just to re-read this index. Do not submit the itch.io URL. Pages base `/roadkeep/` stays.
- Preview: `https://ka9krew.github.io/roadkeep/?portal=crazygames`
- Portal work the user still does at https://developer.crazygames.com/ : description, controls, landscape, three covers, two silent videos, monetization left off. See Game covers and the Portal section below.

## How to read a publish question

1. If it is about this resubmit, start at Roadkeep status.
2. Find the page in the site map, then read that page's rules below.
3. **Basic** must pass QA before the limited test. **Full** waits until CrazyGames invites a full release. **Portal** is filled in the portal, not in the zip. **Guideline** is not a rejection by itself. **Invite** does not apply yet.

Launch shape (https://docs.crazygames.com/ and https://docs.crazygames.com/requirements/intro/):

- **Basic**: 7 to 21 days, limited audience, no CrazyGames-specific integration required, monetization off (video, banners, IAP). SDK optional. If the SDK is integrated, ads stay disabled.
- Period ends after at least 7 days and at least 500 plays. Both are required. If 500 plays come early, it still runs 7 days. If 500 plays never come, it ends at 21 days.
- Outcomes: all metrics pass, invite Full implementation; some pass, another Basic period; most fail, cannot proceed, a new submission needs significant improvements.
- Multiplayer that needs a large audience, or a title CrazyGames invites, can skip Basic and go straight to Full.
- **Full**: global release, full QA, SDK required, monetization on, revenue share. The Basic build stays up for the limited audience while Full is integrated.
- Progression uses average playtime, conversion to gameplay, and retention, benchmarked against other games.

## Site map

69 documentation URLs fetched. Grouped as published.

### Home

- https://docs.crazygames.com/

### Requirements

- https://docs.crazygames.com/requirements/intro/
- https://docs.crazygames.com/requirements/technical/
- https://docs.crazygames.com/requirements/gameplay/
- https://docs.crazygames.com/requirements/ads/
- https://docs.crazygames.com/requirements/account-integration/
- https://docs.crazygames.com/requirements/multiplayer/
- https://docs.crazygames.com/requirements/game-covers/
- https://docs.crazygames.com/requirements/quality/

### SDK (current, v3 / engine tabs on the same URL)

- https://docs.crazygames.com/sdk/intro/
- https://docs.crazygames.com/sdk/video-ads/
- https://docs.crazygames.com/sdk/banners/
- https://docs.crazygames.com/sdk/game/
- https://docs.crazygames.com/sdk/user/
- https://docs.crazygames.com/sdk/data/
- https://docs.crazygames.com/sdk/in-game-purchases/
- https://docs.crazygames.com/sdk/store/
- https://docs.crazygames.com/sdk/leaderboards/
- https://docs.crazygames.com/sdk/leaderboards-client/
- https://docs.crazygames.com/sdk/leaderboard-api/
- https://docs.crazygames.com/sdk/leaderboards-mvp/
- https://docs.crazygames.com/sdk/user-linking/
- https://docs.crazygames.com/sdk/user-linking/user-linking-html5-v3/
- https://docs.crazygames.com/sdk/user-linking/user-linking-unity/
- https://docs.crazygames.com/sdk/gamemaker/example/
- https://docs.crazygames.com/sdk/utils/unity-player-prefs-wrapper/

### SDK HTML5 v2 (legacy)

- https://docs.crazygames.com/sdk/html5-v2/intro/
- https://docs.crazygames.com/sdk/html5-v2/video-ads/
- https://docs.crazygames.com/sdk/html5-v2/banners/
- https://docs.crazygames.com/sdk/html5-v2/game/
- https://docs.crazygames.com/sdk/html5-v2/user/
- https://docs.crazygames.com/sdk/html5-v2/in-game-purchases/
- https://docs.crazygames.com/sdk/html5-v2/user-linking/
- https://docs.crazygames.com/sdk/html5-v2/partials/user-sdk-docs/

### Resources

- https://docs.crazygames.com/resources/
- https://docs.crazygames.com/resources/mouse-control/
- https://docs.crazygames.com/resources/crazygames-app/
- https://docs.crazygames.com/resources/basic-launch-metrics/
- https://docs.crazygames.com/resources/getting-to-the-first-frame/
- https://docs.crazygames.com/resources/ad-monetization-guide/
- https://docs.crazygames.com/resources/rewarded-ads-deep-dive/
- https://docs.crazygames.com/resources/midgame-ads-pacing/
- https://docs.crazygames.com/resources/banner-ads-best-practices/
- https://docs.crazygames.com/resources/monetizing-hypercasual-io/
- https://docs.crazygames.com/resources/monetizing-midcore-idle/
- https://docs.crazygames.com/resources/monetizing-puzzle/
- https://docs.crazygames.com/resources/monetizing-action/
- https://docs.crazygames.com/resources/monetizing-clicker/
- https://docs.crazygames.com/resources/monetizing-word/
- https://docs.crazygames.com/resources/monetizing-driving/
- https://docs.crazygames.com/resources/html5/sitelock/
- https://docs.crazygames.com/resources/html5/common-fixes/
- https://docs.crazygames.com/resources/html5-resources/
- https://docs.crazygames.com/resources/unity-custom-build/
- https://docs.crazygames.com/resources/optimization-tips/
- https://docs.crazygames.com/resources/optimizer-package/
- https://docs.crazygames.com/resources/issues/
- https://docs.crazygames.com/resources/unity-addressables-guide/
- https://docs.crazygames.com/resources/external/
- https://docs.crazygames.com/resources/partners/

### FAQ, payouts, other, partials

- https://docs.crazygames.com/faq/
- https://docs.crazygames.com/payouts/
- https://docs.crazygames.com/other/aps/
- https://docs.crazygames.com/other/game-challenge/
- https://docs.crazygames.com/partials/
- https://docs.crazygames.com/partials/crazygames-domains/
- https://docs.crazygames.com/partials/sdk-requirements/
- https://docs.crazygames.com/partials/user-module-linking/
- https://docs.crazygames.com/partials/user-module-linking-suggestion/

## Home

https://docs.crazygames.com/

- **Basic**: limited test, 7–21 days, no required CrazyGames integration, Basic QA only, monetization off.
- **Full**: global release, full requirements and QA, monetization on. Basic build stays available during Full integration.
- Both thresholds: 7 days live and 500 plays. Early 500 plays still wait out 7 days. No 500 plays ends the period at 21 days.
- Pass all metrics: implement Full, then submit for Full Launch. Partial pass: may get another Basic period. Fail most: cannot proceed; a retry is a new game with significant improvements.
- Skip Basic only for multiplayer that needs a large audience, or when CrazyGames invites a title already published elsewhere.
- Preview before submit: Developer Portal, Submit a game. QA tool runs the game as on CrazyGames and checks SDK features.
- SDK is per engine. If the engine is not listed, use the HTML5 SDK. Engines named on the home page: HTML5, Unity, GameMaker, Construct 3, Godot, Cocos, plus external GDevelop, Defold, Wonderland.

## Requirements introduction

https://docs.crazygames.com/requirements/intro/

| Area | Basic | Full |
| --- | --- | --- |
| Technical | Initial download ≤ 50 MB. Total ≤ 250 MB (≤ 50 MB if no SDK). File count ≤ 1500 | SDK and `gameplayStart` |
| Gameplay | Basic visual QA. PEGI 12 | Full visual QA. Land in gameplay |
| Ads | CrazyGames monetization off. No external ads | SDK ads, ad guidelines, works with adblock |
| Accounts (only if the game has users) | No external login | Progress on the CrazyGames account, username and avatar, automatic login |
| Multiplayer (only if the game has it) | Full features optional | Room info, invite link if used, instant multiplayer, keep rooms across rounds, disable-chat preference |
| IAP | Not available | Invite only. Xsolla and `userId` |

- **Portal**: description, controls, and game covers (images and videos) are part of submission.
- **Guideline**: quality guidelines are optional.
- Extra personal data beyond SDK events needs a Terms and/or Privacy notice. https://docs.crazygames.com/requirements/technical/ (User Consent).
- Selected games only: IAP through Xsolla, Full required. Contact CrazyGames to apply.
- Dashboard metrics after publish: players, average playtime, gameplay conversion, retention, revenue. ByteBrew is the suggested extra analytics tool.
- SDK integration support from CrazyGames starts at 50k combined plays.
- Portal preview: run as on CrazyGames, check requirements, test implemented SDK features.

## Technical

https://docs.crazygames.com/requirements/technical/

- **Basic**: total upload ≤ 250 MB. File count ≤ 1500.
- **Basic**: initial download ≤ 50 MB. Mobile homepage eligibility ≤ 20 MB initial.
- With SDK, initial size is measured from load start until the first `gameplayStart`. That event is when the player can play, not on a menu or extra loading step. https://docs.crazygames.com/sdk/game/#gameplay-startstop
- Without SDK, total file size is the measure and must be ≤ 50 MB (≤ 20 MB for the mobile homepage).
- External files: QA uses time-to-gameplay ≤ 20 seconds.
- **Basic**: relative paths only inside the bundle. Absolute paths fail. Roadkeep portal zip uses relative base `./`.
- **Basic**: Chrome and Edge required. Poor Safari builds get disabled on Safari. Chromebook audience: disabled on Chromium OS if not smooth on 4 GB RAM.
- **Basic**: mouse and keyboard, plus touch if mobile is supported. Landscape on desktop. Portrait is allowed, especially if mobile-friendly, with side bars or a background.
- Prefer SDK `systemInfo` for device, OS, browser, and app type. https://docs.crazygames.com/sdk/user/#system-info
- **Basic** mobile homepage: initial ≤ 20 MB. Orientation is set in the submission; the site asks the user to rotate. Do not implement an orientation lock.
- Tablet CSS on `body` to stop magnification and the long-press menu: `user-select: none` plus the `-webkit-`, `-moz-`, and `-ms-` prefixes.
- Unity on iOS is disabled by default (memory crashes) until play count justifies a review. Not Roadkeep (HTML5).
- Mobile games should survive the CrazyGames app: fullscreen and safe areas. https://docs.crazygames.com/resources/crazygames-app/#safe-area-padding
- Unity DPR is chosen by CrazyGames: 1 on iOS and low-memory Android; native `devicePixelRatio` elsewhere. They can override.
- Audio: Android leaves `AudioContext` running when backgrounded; iOS suspends it. Resume inside a user gesture (`touchend` or `click`), not only on `visibilitychange`. Howler: `Howler.ctx`. PlayCanvas: `pc.app.soundManager.context`. Unity usually handles this.
- **Basic** if SDK is integrated: fire `gameplayStart` at playable state. Ads are not allowed and are disabled even if integrated.
- **Full** SDK: `gameplayStart` / `gameplayStop`; Data module if progress applies; User module if accounts apply; `loadingStart` / `loadingStop` optional.
- **Basic** sitelock: if you sitelock, whitelist every CrazyGames origin, including the iOS and Android app origins. https://docs.crazygames.com/resources/html5/sitelock/
- User consent: extra personal data needs Terms and/or Privacy. Prefer a notice, not a blocking popup. Community example: Bloxd.io in-game policy; Racing Limits opens policy in a new tab.

Roadkeep: last zip about 6.4 MB, under 50 MB, 20 MB, 250 MB, and 1500 files.

## Gameplay

https://docs.crazygames.com/requirements/gameplay/

**Basic** checks:

- Text and images readable at `devicePixelRatio: 1`, in a 16:9 iframe, and on mobile if mobile is supported. Important iframe sizes: 907×510, 1216×684, 1077×606, 821×462 (desktop windowed); 1366×768, 1920×1080, 1536×864, 1280×720 (desktop fullscreen); 800×450 (mobile); 1080×607 (tablet).
- Physics consistent across refresh rates (examples: 144 Hz, 165 Hz).
- English required. Extra translations must be accurate. If the SDK locale is available, use it, else English.
- Intuitive controls. See restricted keys on the quality page.
- Loads quickly and plays without errors or crashes.
- Original name, assets, and content.
- No custom fullscreen button. CrazyGames provides fullscreen. Custom buttons can break monetization. Roadkeep already removes fullscreen, F, and auto-fullscreen in CrazyGames mode.
- No cross-promotion. Exceptions: Privacy and Terms. On the menu, and not as the main call to action: Discord or a dev site if the link is not a playable web build; Steam or Epic on desktop only, on the main menu or at the end of a demo; CrazyGames home or category backlinks if not promoted; other games in the same series. Store links never in-game; use portal metadata fields.
- PEGI 12. Audience is 13+. Kids site exists and has monetization disabled. FAQ: content aimed at kids can fail QA.

**Full**: new users land in gameplay immediately, or at most one click if the game cannot do immediate play.

**Guideline**: quality page is recommended, not mandatory.

Roadkeep: Play starts solo. Privacy stays and must not point at the playable itch.io page. Discord stays. Skippable lesson is on the field.

## Advertisement requirements

https://docs.crazygames.com/requirements/ads/

**Basic**:

- Ads disabled. No revenue share.
- If the Ads SDK is integrated, QA checks that play continues while ads are disabled. Rejection examples: freeze between levels; rewarded button that does nothing.
- Only CrazyGames SDK ads are allowed. No other ad network.

Roadkeep: do not request ads on this resubmit.

**Full** (do not implement for this resubmit):

- Formats: midgame video, rewarded video (CrazyGames supplies fallback banners), in-game banners.
- Ads and purchases must come after a reasonable amount of play. Do not interrupt play, trigger deceptively, or chain ads.
- Midgame: not during play, not on a menu, settings, or shop button. Logical points: level change, map change, death. Pause the game and block UI until `adFinished` or `adError` (auctions are not instant). On `adError` (unfilled, adblock, or low demand), continue the game. Mute only when the ad actually starts, unmute when it ends. Do not mute on the request. Request midgame at natural moments; the SDK enforces frequency (max 1 every 3 minutes) and ignores early requests.
- Rewarded: optional bonus, not the only way to finish a level. Not too often (timer or hide the button). Do not chain ads for one reward. Do not nag. Button not on an active gameplay screen (racing example: not during the race). Button is consistent and not misleading. Skip or continue is the same size, font, and color, and is immediate. Show that a video is required (video icon). Offer a non-ad way to get the reward (coins earned in play). On `adFinished`, show the reward. On `adError`, do not reward. Out-of-lives rewarded is not allowed every death. Do not combine a midgame between levels with a rewarded continue for the same transition: one or the other.
- Banners: only on useful screens open at least 5 seconds on average. Must not cover UI at any size, including mobile. Not during gameplay. Visually distinct from the game. Max 2 banners on one screen. They can hurt performance.
- **Full** adblock: never block or penalize play. You may lock extra features with a notice. No popups (they fight fullscreen and CrazyGames adblock notices). Do not leave a rewarded button clickable with no effect.

## Account integration

https://docs.crazygames.com/requirements/account-integration/

CrazyGames accounts: no separate in-game username or avatar required, no extra login, guests can play. 35 million accounts is a platform claim, not a Roadkeep task.

**Basic**, no user concept: User module not required. Data module or APS is optional.

**Basic**, own backend that stores profile or progress, before a full integration:

- Guests and logged-in CrazyGames users both play as guests by default.
- Disable external login (Facebook, Google, email).
- Full account integration is required later if the game succeeds.

**Full**, show platform profile:

- `getUser()`. `null` means guest. Continue as guest.
- Data module or APS for progress.

**Full**, in-game accounts:

- Logged-in CrazyGames users are auto-registered and auto-logged-in, including return visits.
- Guests play as guests.
- In-game logout and external login (Facebook, Google, email) are not allowed.
- Import or export of accounts is the developer's job, including progress.
- Use CrazyGames `userId` from the User module as the identifier.
- On every launch, `getUserToken()`, verify the JWT on the server, handle shared devices and profile changes.
- Not logged in (`userNotAuthenticated`): guest is the main path. Prefer not creating an in-game account; if you do, you must be able to link it later. Do not identify guests only by local data. A Login with CrazyGames button is allowed, not as the main call to action, and must not auto-open.
- Logged in, known `userId`: refresh username and avatar if you store them, then load that account.
- Logged in, unknown `userId`: create the game account from `userId` (username can change). Optionally copy guest progress.
- Guest logs in mid-session: auth listener, then the logged-in flow, refresh if needed. Logout refreshes the whole page.
- Login button: not the main call to action, top-right is the suggested spot, calls the auth prompt, no other login method for guests.
- Account-link prompt is optional and strongly recommended if you create accounts for guests, especially with IAP.

**Full** progress save, unless progress does not apply. One of:

1. Data module (preferred). Guests save locally. On login, local progress syncs to cloud if the cloud has none.
2. Own backend keyed by the User module, including guest-login and multi-device or shared-device cases.
3. APS. Not allowed for games with IAP, because it syncs local data.

Roadkeep has no CrazyGames accounts and no IAP. None of this is a Basic resubmit task.

## Multiplayer requirements

https://docs.crazygames.com/requirements/multiplayer/

Friends need a CrazyGames account. Join, invite, and notifications use the Game module. Games that implement it can appear on the Multiplayer landing page.

**Full**, only if the game has online multiplayer, and only to be eligible for that landing page:

- `updateRoom` with a `roomId` unique in the game at that moment, `isJoinable`, and `inviteParams`. Invite button still works for older games but room data replaces it.
- Invite link if you also copy a link inside the game.
- Instant multiplayer: first player goes into a new private room with defaults. When `isInstantMultiplayer` is true (Multiplayer landing page), launch straight into multiplayer. A short config screen (mode, player count) is allowed. 20+ player games may drop the player into public play instead. The user must be joinable immediately.
- Round games: same group continues without going back through the CrazyGames UI (next match in the same room, or everyone into the same new room).
- Submit lobby size with the build. Later changes: contact CrazyGames.
- Show CrazyGames usernames in game.
- Skip join onboarding, or make it skippable.

**Guideline**: join in progress or spectate, or say the room is unavailable. Room-join listener so an in-game player does not need a reload. Friends list from the User module is optional UX.

**Basic**: multiplayer that needs a crowd to be fun may skip Basic and go to Full immediately, and must then meet Full rules. Multiplayer that also has single player, and does not need a large test audience, must do Basic. QA chooses.

Chat, if you add it (**Basic** and **Full**): honor the SDK disable-chat setting; CrazyGames can force chat off after complaints. Profanity filter required. AI moderation (Lasso) is not recommended during Basic. Same moderation bar for user-generated images or drawings.

Roadkeep: solo exists, so instant multiplayer is not this resubmit. Do not build it unless multiplayer stays and the game is invited to Full.

## Game covers

https://docs.crazygames.com/requirements/game-covers/

**Portal**. Three images, consistent look:

- Landscape 16:9, 1920×1080.
- Portrait 2:3, 800×1200.
- Square 1:1, 800×800.

Cover restrictions: no borders, no words other than the title (not New, Updated, Play, Play now), no icons or store logos, no visuals you do not have rights to, no blur or pixelation.

**Guideline**: not a raw screenshot; simple; title on the cover; a stylized font. Updating covers after a content drop can lift sessions; do not change them so often players stop recognizing the game.

**Portal** videos, both mandatory:

- Length 15–20 seconds. Longer videos are cut to 20 seconds.
- File ≤ 50 MB.
- Landscape 1080p 16:9.
- Portrait 1080p 2:3.
- No sound.
- Opening frame is the static cover.
- No black screen or logo sting, no letterbox bars, no default mouse cursor, no "Play Now" or promo text, no app or social icons.
- Do not fast-forward; CrazyGames speeds the video up slightly when processing.
- Animated video is allowed if it shows real gameplay and is not misleading.
- Tools they name: Clipchamp, iMovie, HandBrake.

## Quality guidelines

https://docs.crazygames.com/requirements/quality/

**Guideline**, except restricted keys are what gameplay points at for "intuitive controls".

- Onboarding inside play, core actions only, skippable, more visuals than text, show keyboard or mouse controls, clear buttons with no fake delays and no ad-sized buttons.
- Clear goals, easy to learn, correct language, consistent controls.
- Fast response, paced challenge, comfortable layout and audio, UI fits the device, solo is as prominent as friends when both exist. If there is no solo, say so.
- Do not change genre after submission. Name must not be a generic title you do not own ("Chess" vs "Super Chess").
- Consistent art, no compression artifacts, consistent audio levels. Store name and art must match the game.

Restricted keys:

- Prefer bindings that follow the keyboard layout. AZERTY movement is ZQSD, not WASD.
- Escape closes fullscreen. Do not bind Escape as a game key on CrazyGames. Roadkeep already removes Escape-as-a-game-key in CrazyGames mode.
- Ctrl or Cmd+W closes the tab. It can be disabled while fullscreen.

## SDK introduction

https://docs.crazygames.com/sdk/intro/

Current script, before game code:

```html
<script src="https://sdk.crazygames.com/crazygames-sdk-v3.js"></script>
```

`await window.CrazyGames.SDK.init()` before any call. Init is async. v3 errors are `{ code, message }`.

HTML5 modules, all supported: `ad`, `banner`, `game`, `user`, `data`, in-game purchases (not a separate module name). Unity, GameMaker, Construct, and Godot match that. Cocos has no `banner` module.

Environments:

- `localhost` and `127.0.0.1`: `local`. Demo ad overlay, console logs for gameplay events. Other hosts can force this with `?useLocalSdk=true`.
- CrazyGames domains: `crazygames`.
- Anywhere else, including your own site: `disabled`. Calls throw. Check `window.CrazyGames.SDK.environment` and skip calls outside `local` and `crazygames`.
- Unity: `CrazySDK.IsAvailable` is true on CrazyGames, in the editor, and on localhost. Not on a whitelisted domain. Iframed Unity builds should use a query flag such as `isCrazyGames=true` because `IsAvailable` does not work there. Do not init inside `RuntimeInitializeOnLoadMethod`. Demo loading scene should be the first scene.
- Construct: worker mode must be off. SDK URL `https://sdk.crazygames.com/Construct3CrazySDK-v3.js`.
- Godot: export preset, HTML file renamed to `index.html`, run on localhost.
- Unity sitelock is automatic and also blocks your own domain until you whitelist it in `CrazySDK/Resources/CrazyGamesSettings`. Reimporting the SDK resets that. CrazyGames only accepts compressed Unity builds (Brotli or Gzip), not development builds.
- Preview on `crazygames.com/preview` is the realistic QA environment. Xsolla tokens work only there.
- v2 migration notes: manual init required; some getters are now properties (`environment`, `user.isUserAccountAvailable`, `user.systemInfo`); loading methods renamed to `loadingStart` / `loadingStop`.

Roadkeep: do not load this script on GitHub Pages. Do not call ads.

## Video ads SDK

https://docs.crazygames.com/sdk/video-ads/

**Full**. Do not call for this resubmit.

HTML5: `window.CrazyGames.SDK.ad.requestAd("midgame" | "rewarded", { adStarted, adError, adFinished })`. Pause and mute on `adStarted`. Resume and unmute on `adFinished` and `adError`.

`adError` codes: `adsDisabledBasicLaunch`, `unfilled`, `adblock`, `adCooldown` (midgame interval is 3 minutes, counting rewarded and preroll), `other`. Shape: `{ code, message }`.

`await window.CrazyGames.SDK.ad.hasAdblock()`. Games must still be playable with an adblocker. Extra content may be locked. Refresh is often required to disable an adblocker, so save progress first.

Unity pauses itself around the ad. Construct must set time scale to 0 and silence audio before the ad.

## Banners SDK

https://docs.crazygames.com/sdk/banners/

**Full**. Do not call for this resubmit. Cocos: not supported.

Static sizes: 728×90, 300×250, 320×50, 468×60, 320×100. HTML5: a sized `div`, then `requestBanner({ id, width, height })`.

Responsive sizes that may be chosen: 970×90, 320×50, 160×600, 336×280, 728×90, 300×600, 468×60, 970×250, 300×250, 250×250, 120×600. Container must have a real size. `requestResponsiveBanner(containerId)`. No matching size means no ad. Not available on Unity or Godot.

Error codes: `bannersDisabledBasicLaunch`, `unfilled`, `missingId`, `notVisible`, `noAvailableSizes`, `notCreated`, `videoAdPlaying`, `invalidSize`, `bannerCooldown`, `maxRefreshReached`, `bannersDisabledMobileApp`, `other`.

Limits: 30 seconds between refreshes of the same container. 120 refreshes per size per session. Banner must be fully inside the game window. `clearBanner(id)` or `clearAllBanners()` before hiding, or the old banner flashes. Unity must call `CrazySDK.Banner.RefreshBanners()` on show, hide, and scene change. Banners do not render in the mobile app (`bannersDisabledMobileApp`).

v2 difference (do not use): refresh wait was 60 seconds and the session cap was 60, and at most 2 banners of the same size. https://docs.crazygames.com/sdk/html5-v2/banners/

## Game module

https://docs.crazygames.com/sdk/game/

HTML5: `window.CrazyGames.SDK.game`.

Settings (**Full** for `muteAudio` on HTML5, Unity, Cocos, Construct):

- `disableChat`: if true, disable chat. Local test `?disableChat=true`.
- `muteAudio`: platform mute wins over the in-game toggle. Local test `?muteAudio=true`. Unity submitted as Unity (not HTML5) gets this automatically.
- `addSettingsChangeListener` / `removeSettingsChangeListener`.

`gameplayStart()` when play starts or resumes (start, resume, revive, next level). The first call is the initial-download marker. `gameplayStop()` on every break (menu, level end, pause). Do not call stop when the tab loses focus; CrazyGames does that.

`loadingStart()` / `loadingStop()` around loads. Optional at Full. Not used for Unity (loader) or required for Godot.

`happytime()` for a rare achievement, not every level or item. Sparingly.

`setGameContext({ ... })` / `clearGameContext()` attaches level or loadout to player feedback email. Optional.

Multiplayer block is **Full** and only if multiplayer stays. The page says to read the requirements page for what is mandatory.

- `isInstantMultiplayer` (old name `isInstantJoin`). If true, create a joinable room immediately.
- `updateRoom({ roomId, isJoinable, inviteParams })`. `leftRoom()` when the player leaves. `roomId` must be unique across regions (prefix the region).
- `addJoinRoomListener`: fired when an already-running player accepts an invite. On a fresh load, read `inviteParams` instead (`null` if not an invite).
- `inviteLink({ ...params })` returns a URL. `getInviteParam(name)`.
- `showInviteButton` / `hideInviteButton` are deprecated in favor of room data. Hide the button when the room is full, started, or cancelled. Do not use the invite button as a generic share button (v2 page: that can delay or reject the submission).

## User module

https://docs.crazygames.com/sdk/user/

**Basic** and **Full** where accounts exist. Not a Roadkeep resubmit task. Check `user.isUserAccountAvailable` first (v3 property; v2 was a method). It is false off CrazyGames domains.

- `getUser()`: `null` if logged out. Fields: `__dangerousUserId` (do not authenticate with this), `username` (6–20, letters, numbers, period, underscore), `profilePictureUrl`.
- `systemInfo`: `countryCode`, `locale` (use this for language), `device.type` (`desktop` | `tablet` | `mobile`), `os`, `browser` (ua-parser-js names), `applicationType` (`web` | `pwa` | `google_play_store` | `apple_store`).
- `listFriends({ page, size })`: page starts at 1, size max 50. Errors: `userNotAuthenticated`, `rateLimited` (250 ms), `requestInProgress`, `unexpectedError`. Friend objects use `id`, not the dangerous user id field.
- `getUserToken()`: JWT, 1 hour, SDK refreshes it. Do not store it. Do not verify it in the client. Send it to your server. Verify with RS256 and `https://sdk.crazygames.com/publicKey.json` (refetch the key, or refetch when verify fails). Payload: `userId`, `gameId`, `username`, `profilePictureUrl`, `iat`, `exp`. Errors: `userNotAuthenticated`, `unexpectedError`.
- `showAuthPrompt()`: login or register popup. Errors: `showAuthPromptInProgress`, `userAlreadySignedIn`, `userCancelled`. Do not call this automatically.
- `addAuthListener`: login only. Logout reloads the page, so there is no logout event. If you key progress to the account, reload progress. Data module and APS reload the game for you.
- `showAccountLinkPrompt()`: **Guideline**. Response `{ response: "yes" | "no" }`. Unity returns a boolean. Errors: `showAccountLinkPromptInProgress`, `userNotAuthenticated`.
- `getXsollaUserToken()`: see purchases. Short-lived, fetch each use.
- Local query overrides: `user_account_available=false`, `show_auth_prompt_response` (`user1`, `user2`, `user_cancelled`), `link_account_response` (`yes`, `no`, `logged_out`), `user_response` (`user1`, `user2`, `logged_out`), `token_response` (`user1`, `user2`, `expired_token`, `logged_out`). Defaults: user1, token for user1, link yes, auth user1, account available true.

## Data module

https://docs.crazygames.com/sdk/data/

**Full** when you choose it for progress. Not this resubmit.

- Select "Yes, using the Data Module" in the submission or the module is disabled (`dataModuleDisabled`).
- Use it for guests and logged-in users. Do not also trust a separate local save.
- Init first. SDK preloads data during init, so init on the loading screen.
- HTML5 API matches `localStorage`: `getItem`, `setItem`, `removeItem`, `clear`. Read before write so you do not clobber progress.
- Unity API matches PlayerPrefs. Helper: https://docs.crazygames.com/sdk/utils/unity-player-prefs-wrapper/ (`SafePlayerPrefs`, throws if the SDK is available but not initialized).
- Cap 1 MB (`dataLimitExcedeed`). Console warns as you approach it. Saves above 1 MB are not backed up.
- Debounce about 1 second, sometimes up to 30 seconds.
- Guests: stored in `localStorage`. On sign-in, cloud data loads if it exists, otherwise guest data is copied up. Sign-out returns to guest data.
- Already-shipped games: copy existing `localStorage` or PlayerPrefs into the module once.

## In-game purchases

https://docs.crazygames.com/sdk/in-game-purchases/

**Invite** and **Full**. Not available during Basic. Email developer-relations@crazygames.com. Guests cannot buy. Need User module (own backend) or Data module.

- Disable any Xsolla or other payment UI when `applicationType` is `google_play_store` or `apple_store`.
- Standard path: CrazyGames issues credentials, `user.getXsollaUserToken()`, purchases attach to the CrazyGames user. Project ID comes from CrazyGames. Fetch the token every time (about 1 hour).
- Custom path: your own Xsolla credentials inside their project. Orders must carry CrazyGames `userId`, either as the Xsolla user id or `custom_parameters.crazyGamesUserId`.
- Token works only on CrazyGames, including portal preview. Sandbox for tests. Sandbox must be off at submission.
- Optional: `SDK.analytics.trackOrder("xsolla", order)` on `done`. Statuses: `new`, `done`, `canceled`.
- Requirements: close button on Pay Station; if it opens a new tab, tell the player to allow popups (text only); hide "Back to the game" (Pay Station manual redirect = None); credit from webhooks or inventory, not from the widget close; client-side tracking is extra and must be checked against webhooks or inventory; stay on the shop until the item is granted; hide purchase UI in the CrazyGames app.
- Common mistakes: widget is easier than a custom flow; mobile back button can be hidden; players dismiss by clicking outside or pressing Esc. Disable `closeByClick` and `closeByKeyboard`. Unity: `Assets/Xsolla/Core/Plugins/paystation.jslib`.
- Loot boxes bought with money, or with currency bought with money, are restricted in Belgium, China, Netherlands, Serbia, Slovakia. Taiwan and South Korea also if per-item odds are not shown. Japan also if the item can be worth less than the price, or if the terms do not ban real-money trading. Other random paid mechanics (wheels, card packs) are judged case by case.

## Store module

https://docs.crazygames.com/sdk/store/

**Invite**, beta. HTML5 and Unity only. `buyItem` is what enables purchases inside the CrazyGames mobile app, and it also works on the web. Can sit next to an existing Xsolla integration.

- `listCatalogItems({ limit, offset })`: max 50 per call, limit 1–50, offset ≥ 0. Show returned prices. They are per user. Errors: `invalidArgument`, `requestInProgress`, `catalogFetchFailed`, `unexpectedError`, `other`.
- `getPlayerInventory({ limit, offset })`: signed-in only. Items have `sku`, `name`, `description`, `imageUrl`, `quantity` (`null` on HTML5 when Xsolla does not count it; Unity uses `0`). Errors include `userNotAuthenticated`, `inventoryFetchFailed`.
- `buyItem(itemId)`: one purchase at a time. Success means the widget finished, not that you should grant the item. Confirm with your server or Xsolla inventory. Errors: `userNotAuthenticated`, `purchaseInitFailed`, `purchaseInProgress`, `purchaseCancelled`, `unexpectedError`, `other`.
- `consumeItem(sku, quantity)`: HTML5 only. Quantity ≥ 1. Errors: `userNotAuthenticated`, `invalidArgument`, `itemNotConsumable`, `itemNotInInventory`, `insufficientItemQuantity`, `consumeItemFailed`, `unexpectedError`, `other`.
- `setSandbox(true)` while developing. Turn off for release.
- Local SDK: fake catalog (3 items), fake inventory (2), `buyItem` always succeeds, `consumeItem` always succeeds. Unity editor `Buy Item Response`: `Success`, `PurchaseCancelled`, `UserLoggedOut`, `UnexpectedError`.

## Leaderboards

https://docs.crazygames.com/sdk/leaderboards/

**Invite**. One leaderboard per game. Seasons Monday to Monday, reset 09:00 UTC. Ranks: global, country, friends. Awards: 1st, 2nd, 3rd, and top 1%, 5%, 10%.

Config (portal, at least one of encryption key or API key):

- Leaderboard guide ≤ 50 characters.
- Encryption key: 32-byte base64, same in every environment, for client submit. Portal can generate it.
- API key: 32-byte base64, server submit only. Keep it secret.
- Metric: `XP` | `KDA` | `POINTS` | `MINUTES`.
- `isIncremental`: true if the score grows across the season, false for one-session scores.
- Sort `ASC` (lower is better, such as time) or `DESC`.
- `minValue`, `maxValue` (floats). Out of range is rejected.
- `cooldownSeconds`: client SDK only, not the server API.

Client vs server: client encrypts in the browser and can be tampered with. Server API is preferred when you have a backend.

Older MVP page, superseded for config-by-portal and the server API: https://docs.crazygames.com/sdk/leaderboards-mvp/

MVP differences to remember: season end was Monday 07:00 UTC; settings were emailed to CrazyGames; `submitScore` sent only `encryptedScore` (current client page also sends the plain score); preview scores were not stored; server API was out of scope. Do not implement the MVP.

## Leaderboards client

https://docs.crazygames.com/sdk/leaderboards-client/

**Invite**. Encrypt with AES-GCM, 12-byte IV, key is base64. HTML5 uses Web Crypto. Unity uses AES-CTR plus a trailing `0x55` marker. Then:

`CrazyGames.SDK.user.submitScore({ encryptedScore, score })`.

Preview: a `submitScore` log line. The call always looks successful; checks happen on the server.

## Leaderboards API

https://docs.crazygames.com/sdk/leaderboard-api/

**Invite**. `POST https://leaderboard.crazygames.com/leaderboard/scores`. Headers: `X-API-Key`, `Content-Type: application/json`.

Body: `{ scores: [{ userId, score, timestamp }] }`. `userId` comes from the verified user token. `score` must be finite. `timestamp` is ISO 8601 when the score happened, not when you upload it, and cannot be in the future. Max 100 scores per request. 1000 requests per 60 seconds per key. `429` includes `Retry-After` seconds.

`200` can still be a partial failure. `success`, `total`, `successCount`, `failureCount`, `errors[]` of `{ score, type }`. Types: `no-active-season`, `user-not-found`, `privacy-disabled`, `validation`, `internal-server-error`. Format or timestamp validation rejects the whole batch (`successCount` 0); fix and resend the whole batch. Per-user errors do not block the other scores.

`400` bad body or batch over 100. `401` bad key. `500` server. The docs' long sample client uses a different host (`userportal.crazygames.com`); the stated endpoint is `leaderboard.crazygames.com`.

## User linking

Flow (Full, only if you keep your own accounts). Same steps on:

- https://docs.crazygames.com/sdk/user-linking/user-linking-html5-v3/
- https://docs.crazygames.com/sdk/user-linking/user-linking-unity/
- https://docs.crazygames.com/partials/user-module-linking/
- https://docs.crazygames.com/sdk/html5-v2/user-linking/ (**Legacy**)

https://docs.crazygames.com/sdk/user-linking/ is only a shell page.

- Advanced. CrazyGames will not help you design merges. A bad integration can delay or reject the game.
- Map CrazyGames user to your user id in the backend. Do not treat the client user id as proof.
- Every launch: get the CrazyGames user.
- Logged out: guest play. Optional Login with CrazyGames (auth prompt) plus other providers. Do not auto-open the auth prompt.
- Logged in and already linked: load that account. CrazyGames login outranks an in-game session.
- Logged in and not linked: create a fresh game account from the token.
- In-game session exists but is not linked: show "Link CrazyGames account" (`showAccountLinkPrompt`). Prefer linking a fresh account. Avoid silent merges; if you must merge, let the player pick which data to keep.
- If the player can log out or start as guest: put Login with CrazyGames on that screen. After a Google or password login, run the account-link prompt.
- Database sketch (https://docs.crazygames.com/partials/user-module-linking-suggestion/): store `crazyGamesId`. Send the token to your server on each authenticated request. If `getUser()` is null, sign them out of your game. Firebase: verify the token in a Cloud Function, write the link, return a custom Firebase token. Never link Firebase from the client.

Unity-only extra on the Unity linking page: `CrazySDK.User.SyncUnityGameData()` to push PlayerPrefs because APS cannot always see IndexedDB writes. https://docs.crazygames.com/other/aps/

## GameMaker example

https://docs.crazygames.com/sdk/gamemaker/example/

**Legacy-style sample**, not the v3 API. It ends the game when the host is not `*.crazygames.com` unless `debug_mode` is on. Enter = midgame, Space = rewarded, Esc = banners, P = invite link, L = read `room_id`, U = user info. Pause audio on `crazy.break.started`, resume on error or finished, grant the reward only on `crazy.break.finished`. Not for Roadkeep.

## HTML5 v2

**Legacy**. https://docs.crazygames.com/sdk/html5-v2/intro/ says migrate to v3. Script: `https://sdk.crazygames.com/crazygames-sdk-v2.js`. No manual `init()`. Environment via `SDK.getEnvironment()` (callback or promise): `local`, `crazygames`, `disabled`. `?useLocalSdk=true` still forces local.

v2-only behavior:

- Stop page scroll yourself: `wheel` preventDefault, and `keydown` preventDefault for ArrowUp, ArrowDown, and space. The current common-fixes page repeats this. https://docs.crazygames.com/resources/html5/common-fixes/
- No built-in JS sitelock. Add your own.
- Global `adStarted` events are gone; pass a callback object.
- Video ads are callback-only (no promise). `adError` second argument uses `reason` (`unfilled` or `other`), not the v3 `code` list. https://docs.crazygames.com/sdk/html5-v2/video-ads/
- Banners: max 2 of one size, 60 s refresh, 60 refreshes per size per session. https://docs.crazygames.com/sdk/html5-v2/banners/
- Loading methods are `sdkGameLoadingStart` / `sdkGameLoadingStop`. Invite button must not be a generic share button. https://docs.crazygames.com/sdk/html5-v2/game/
- User methods are callbacks or promises, and several are marked Full only. `getSystemInfo()` is a method and has no `locale` or `applicationType` in the sample. `isUserAccountAvailable` is a function. https://docs.crazygames.com/sdk/html5-v2/user/
- Xsolla token callback or promise. Same 1-hour guidance and preview-only testing. https://docs.crazygames.com/sdk/html5-v2/in-game-purchases/
- https://docs.crazygames.com/sdk/html5-v2/partials/user-sdk-docs/ duplicates the v2 user page. It is an include, not a second API.

## Resources index

https://docs.crazygames.com/resources/

Map only. General: mouse, app, Basic Launch metrics, first frame. Monetization: the ad guides and seven genre pages. HTML5: sitelock, common fixes. Unity: custom build, optimization, optimizer, issues, addressables. References: external links.

https://docs.crazygames.com/resources/html5-resources/ only redirects to the resources intro, sitelock, and common fixes.

## Mouse control

https://docs.crazygames.com/resources/mouse-control/

Many desktop players are not fullscreen. Do not let a click fall outside the frame.

- First person: pointer lock during play, and a key to release (Escape or Tab).
- Top-down games that move by mouse gesture: lock and confine the pointer, custom cursor or a joystick, a release key, and either clickable HUD buttons or a shown shortcut. Drag-and-drop stays inside the game. WASD or arrows are optional.
- Click-heavy UI games (clickers, bubble shooters): confinement not required.
- HTML5: Pointer Lock API. Unity sample on that page is a software cursor clamped to the canvas. A fake Unity cursor does not click Unity UI; you handle hits yourself.

## CrazyGames app

https://docs.crazygames.com/resources/crazygames-app/

Auth, SDK, progress, and ads match the mobile site, with these exceptions.

- Detect with `systemInfo.applicationType`: `google_play_store` or `apple_store`.
- No Xsolla inside the app. Hide purchase buttons. Do not send the player into a flow that cannot finish.
- Games are fullscreen, including an edge-to-edge mode. Pad HUD with `env(safe-area-inset-*)` when in the app. Keep the playfield fullscreen.
- Embedder origins: iOS `capacitor://app.crazygames.com`, Android `https://app.crazygames.com`. CSP `frame-ancestors` must list both or iOS shows a white screen. Details on the sitelock page.

## Basic Launch metrics

https://docs.crazygames.com/resources/basic-launch-metrics/

**Guideline** for the test, not extra QA gates. Dashboard updates daily. Day-1 retention lags a day. Updates during Basic go live without a new approval. SDK not required. Ads stay off if you add the SDK.

- Average playtime. Strong titles often 10+ minutes.
- Day-1 retention. Strong titles often 10–15%.
- Conversion: share of players who play at least one minute. Top titles often 80%+, load under 10 seconds, build under 20 MB.
- Levers they name: a clear loop, goals, paced mechanics, fair difficulty, progression, daily hooks, saved progress, small build, load the first level first, skip long intros.

## Loading

https://docs.crazygames.com/resources/getting-to-the-first-frame/

**Guideline**. Feel of load matters: under 100 ms feels instant, 1 second is fine, 10 seconds needs feedback.

CrazyGames measures first load until `gameplayStart`, which must be real play, not a loading screen. Load the tutorial, start play, stream the rest, then a loading screen only if the tutorial ends before the rest is ready.

Size: split and defer. Unity Addressables. Godot `.pck` plus `load_resource_pack` and interactive `ResourceLoader`. Build: Brotli, texture and audio compression, strip unused code, no debug symbols. Startup: keep `Awake`/`Start` or `_ready` light. Runtime: watch WASM cost, overdraw, physics, GC, audio latency. `Application.targetFrameRate` advice for Unity is on the optimization page (leave it at -1).

## Ad monetization guides

All **Guideline** and **Full**. Not this resubmit. Hard rules stay on the ads requirements page. These pages tell you where ads convert.

https://docs.crazygames.com/resources/ad-monetization-guide/

- Rewarded: highest eCPM, opt-in, after a real need (revive once per session, double coins at level end).
- Midgame: request at every natural break. SDK caps at 1 per 3 minutes. Not during play.
- Banners: menus, shops, lobbies, level select. Not during play. Keep controls away from the banner.
- Desktop sessions are longer. Mobile sessions are shorter, so a revive matters more and a banner costs more of the screen (they cite 10–15% in landscape).

https://docs.crazygames.com/resources/rewarded-ads-deep-dive/

- Motives: save a loss, skip a wait, exclusive cosmetic.
- Placements: game over, shop, lobby daily reward, "you are 50 short".
- Label the reward ("Watch Ad for +50 Gems") and use a video icon.
- Scale the reward with progress. Daily caps and diminishing returns protect the economy.
- Their "once per session" revive note is stricter than the requirements page, which forbids an out-of-lives offer on every death. Follow the requirements page if they differ.

https://docs.crazygames.com/resources/midgame-ads-pacing/

- Natural breaks only: between rounds, after a boss, not while navigating menus.
- Do not add your own longer cooldown. Request at each break and let the SDK drop early calls.
- Delay the first midgame until the tutorial is done or about 3–5 minutes, or until level 3 or 4.
- If retention falls, move the placement. Do not request less often than the SDK allows.

https://docs.crazygames.com/resources/banner-ads-best-practices/

- Design the slot first. Edge of the screen, not floating. Portrait: top. Landscape: bottom. Desktop menus can use a side column (`160×600` or `300×250`).
- About 10–15 px between the banner and buttons.
- Hide during play. Do not pop a banner onto the pixel the player just clicked.
- Viewability they cite: on screen at least 5 seconds. That matches the requirements page (useful screens open ≥ 5 seconds on average).
- Refresh limits: they point back at the ads requirements and the banner SDK (30 seconds, 120 per size per session).

Genre pages, same pattern, **Guideline**:

- https://docs.crazygames.com/resources/monetizing-hypercasual-io/ Short rounds: midgame on summary or Next, not instantly. Revive once per session, 5 s countdown, 2–3 s invulnerability. Cosmetic rewarded. Banners on menu, shop, level select.
- https://docs.crazygames.com/resources/monetizing-midcore-idle/ Prefer rewarded over midgame. Daily gem cap (example: 5). Scale rewards. Energy refill and a rare free chest. Midgame only after a major transition, if at all.
- https://docs.crazygames.com/resources/monetizing-puzzle/ Banners on menus (`320×50` mobile, `728×90` desktop), 15–20 px gap. Rewarded hint with about a 1 minute cooldown, extra moves, skip without stars, daily puzzle. Midgame only between levels.
- https://docs.crazygames.com/resources/monetizing-action/ Revive once per session with countdown and brief invulnerability. Trial weapon, end-of-match multiplier. No midgame in combat. Banners in lobby and shop.
- https://docs.crazygames.com/resources/monetizing-clicker/ Banners on upgrade and shop screens. Welcome-back multiplier and a timed auto-click. Midgame only at a pause, with a 3–5 second warning. Never during active tapping.
- https://docs.crazygames.com/resources/monetizing-word/ Banners between puzzles. Rewarded hint, extra daily, bonus-word multiplier. Midgame only between puzzles. They cite 71% conversion as a genre note, not a gate.
- https://docs.crazygames.com/resources/monetizing-driving/ No ads during a race. Midgame on the post-race screen, or skip midgame. Rewarded: reward multiplier, fuel, cosmetics, one-race test drive. Banners in the garage.

## Sitelock

https://docs.crazygames.com/resources/html5/sitelock/

**Basic** only if you add a sitelock. Roadkeep does not need one for the portal zip (files are hosted by CrazyGames). If you add one:

- Own page: allow `crazygames.com` and any `*.crazygames.com` host. Example host: `cubes-2048-io.game-files.crazygames.com`. Fail closed with a message or a blank page. Obfuscation is optional.
- Iframe CSP `frame-ancestors` must allow `*.crazygames.com`, `games.crazygames.com` (video ads), `https://app.crazygames.com`, and `capacitor://app.crazygames.com`.
- A bare `*.crazygames.com` in a policy served over https allows https ancestors only. iOS app is `capacitor://` and then shows a white screen with no JS error.
- `frame-ancestors` is checked for every ancestor. In the apps the game is inside `games.crazygames.com`, which is inside the app, so both must be allowed.
- If you check `document.referrer` or `ancestorOrigins`, compare the host and do not require https.
- Deprecated country domains do not need to be listed. The full retired list is on https://docs.crazygames.com/partials/crazygames-domains/ and on the sitelock page.

## HTML5 common fixes

https://docs.crazygames.com/resources/html5/common-fixes/

Prevent wheel scrolling. Prevent ArrowUp and ArrowDown from scrolling the page. The v2 intro also names the space bar; the common-fixes snippet's third key is a space that does not survive markdown. Also `contextmenu` preventDefault. The Samsung-webview `visibilitychange` snippet posts `OnWebDocumentPause` and is a Unity-webview fix.

## Unity custom build

https://docs.crazygames.com/resources/unity-custom-build/

Not Roadkeep. Latest Unity SDK, `CrazySDK` menu. Development build for local tests. Release build for upload: several platform variants, Disk Size with LTO, output in `Builds/CrazyGamesRelease`. Upload that whole folder. They only serve the files for the player's device, so the folder is larger than one build. Analyzer lists assets and code in the build. If the tool fails, a normal Unity build is still accepted.

## Unity optimization

https://docs.crazygames.com/resources/optimization-tips/

**Guideline**, Unity only. Not Roadkeep. The short list:

- Brotli. Code optimization: Runtime Speed with LTO, or Disk Size with LTO. Not "Shorter Build Time". IL2CPP: Faster (smaller) builds (Unity 6.2: Optimize for code size and build time). Their empty-project test: 14.7 MB to 12.5 MB.
- Stripping above Minimal can delete live code. Test. API compatibility: .NET Standard unless you need .NET Framework.
- Audio: mono and lower quality. Textures: cap max size, drop mipmaps on sprites, try crunch. Disable URP post-processing if unused (about 1 MB). Mesh compression High saves size but can slow load or artifact. Remove unused packages.
- Draw calls: sprite atlases, mesh LOD (Unity 6.2+), static batching (memory cost). Exceptions: not "Full With Stacktrace". Quality settings down for weak devices. WebAssembly 2023 on Unity 6+.
- Heap: fewer allocations. `targetFrameRate` stays `-1` on WebGL. Name files as hashes. Disable splash and the Unity logo (Unity 6). Enable caching.
- Addressables or StreamingAssets: Unity 2020+, folder must be named `StreamingAssets`, upload Build and StreamingAssets, load via `Application.streamingAssetsPath`. They do not count toward initial download if done this way. Do not host them elsewhere.
- CrazyGames ignores Unity `index.html` and extra JS for Unity-type submissions. A game that needs custom JS should be submitted as HTML5, and then loses Unity loader fixes.
- URP adds about 3.6 MB. TextMeshPro adds about 0.7 MB, or about 0.5 MB if the emoji font is removed.
- Memory profiler, Project Auditor, and the diagnostics overlay are the tools they name. Diagnostics overlay is for debugging, not a shipping requirement.

## Unity optimizer package

https://docs.crazygames.com/resources/optimizer-package/

Deprecated. Use custom builds. Old package: Unity 2019+, C# 6, menu `Tools > WebGL Optimizer`. Export checklist, texture scan of build scenes and Resources, Editor.log size report.

## Unity common issues

https://docs.crazygames.com/resources/issues/

- Do not lock the cursor before the first click. Use a "click to lock" overlay or a Play button. Early lock can fail or crash on scroll.
- URP black or flickering meshes on Mac: disable Depth Priming Mode on the Universal Renderer asset.
- Huge mouse deltas: their filter drops spikes above 800, or a jump above 100, unless they repeat (`maxConsecutiveSpikes` 2).

## Addressables guide

https://docs.crazygames.com/resources/unity-addressables-guide/

Install from Package Manager. Mark the asset Addressable. A referenced AudioSource still packs the clip into the main build. Upload the `StreamingAssets` folder with the Build folder. `LoadAssetAsync`, then `ReleaseAsset` when done. Prefab addressables pull their dependencies out. Split groups so you do not download one giant bundle.

## External resources

https://docs.crazygames.com/resources/external/

Links only, no CrazyGames rules: PlayCanvas talks on HTML5 optimization, casual performance, and multiplayer open worlds; a BabylonJS performance article; a Unity web optimization masterclass.

## Partners

https://docs.crazygames.com/resources/partners/

- Engines: HTML5, Unity, GameMaker, Construct 3, Godot, Cocos, plus external GDevelop, Defold, Wonderland.
- Xsolla: IAP is invite-only and must use the CrazyGames Xsolla account. See the purchases page.
- ByteBrew: optional analytics. Invite `analytics@crazygames.com` as a data partner. Not required for Basic.
- Lasso: chat, image, username, and comment moderation. Referral bonus. Not recommended for Basic chat.
- Photon: they do not host your multiplayer servers. FAQ says the same.

## FAQ

https://docs.crazygames.com/faq/

Facts that are not already on the pages above:

- You can publish a game that is already on mobile, Steam, or elsewhere if you hold the rights. You keep ownership.
- QA rejection examples: bugs, missing English, clones or asset flips, inappropriate content, terms or ethics, not PEGI 12, content aimed at kids.
- Updates usually go live the same working day, after cache refresh. **Basic** game and art updates go live immediately. A terms violation can terminate the game.
- Ads are off during Basic so metrics are not distorted. Full is when ads and wider promotion turn on.
- They will not iframe a build hosted on another game portal. Your own domain can be iframed, but they prefer you upload files. External hosts earn only if the SDK is integrated.
- No CrazyGames logo required.
- Acceptance email comes from them. A rejected game can be resubmitted after real changes.
- Negative ratings can include a reason, visible in the portal.
- Ranking uses device, country, OS, some personalization, a new-game boost, then play count, playtime, retention, conversion, and feedback.
- Revenue eligibility: no other portal's branding, SDK integrated, no external ads, original. Other store listings do not block revenue share.
- Payouts: monthly, €100 minimum, wire or PayPal. Below the minimum rolls forward. See the payouts page for Tipalti detail (FAQ is slightly narrower than that page).
- Uploaded files are on their CDN. You do not invalidate cache.
- Unity StreamingAssets: drag Build and StreamingAssets into the upload area. Nothing else special.
- Browsers: Chrome and Edge required. Safari and Firefox recommended.
- iOS white screen: CSP host without scheme does not allow `capacitor://`. See sitelock.
- They do not host multiplayer servers.
- Contact: check the console first. If it is preview, include the preview link.

The rest of the FAQ is audience and market description, not a submission rule.

## Payouts

https://docs.crazygames.com/payouts/

**Portal**, after there is revenue. Not a Basic code task.

- Tipalti. Account, Billing, steps 1–4. You can submit without a payment method by choosing Hold payments in step 2. finance@crazygames.com.
- Methods: wire, ACH, eCheck, PayPal, depending on country. Hold is allowed and pays out later in one transfer.
- Minimum payout €100. Invoicing threshold €10 (smaller amounts roll to the next month). Terms are NET 60. They currently aim to pay by the 10th of the next month.
- Invoice amounts win over the dashboard if time zones differ.
- Self-billing needs name, address, and country. Tax form is chosen by Tipalti's wizard. PayPal is processed in USD; set payment country to United States to see it, and pick USD to avoid FX.
- Update details under Account, Billing. Rejected payments retry next cycle after you fix the note in Billing history.

## Automatic progress save

https://docs.crazygames.com/other/aps/

**Full** option, not for IAP. No code for HTML5: they back up and restore `localStorage` for the logged-in account. Unity: `PlayerPrefs` in IndexedDB syncs the same way, but detection is imperfect, so Unity also has `SyncUnityGameData()`. Data module is the preferred alternative. See account integration.

## Game challenge

https://docs.crazygames.com/other/game-challenge/

**Legacy** score hook for an old challenge feature. `user.addScore(value)` on the v2 SDK. Backend keeps the score only if it is higher. Value must be a number (decimals allowed). This is not the current leaderboard API.

## Partials

Includes, not extra rules.

- https://docs.crazygames.com/partials/ explains they are HTML snippets embedded into other pages.
- https://docs.crazygames.com/partials/sdk-requirements/ is one sentence: follow the requirements.
- https://docs.crazygames.com/partials/crazygames-domains/ is the domain list already captured under sitelock.
- Linking partials match the user-linking section.

## Portal checklist

https://developer.crazygames.com/ is the upload app. It is not a documentation article (the fetched page is the portal shell).

The user still does this there. Game code does not.

- Upload the existing portal zip. `index.html` at the root. Do not submit the itch.io URL or the GitHub Pages URL as the game file.
- Description and controls.
- Landscape.
- Covers 1920×1080, 800×1200, 800×800.
- Silent 15–20 s videos: 1080p landscape and 1080p portrait.
- Leave monetization off.
- If a progress-save toggle is offered, do not enable the Data Module unless that module is actually integrated. Enabling it while unused disables the module and is the wrong switch for this build. https://docs.crazygames.com/sdk/data/
- Preview on the portal before the real submit. https://docs.crazygames.com/#testing-your-game
- QA plays the build. Rejection mail can be answered with a resubmit after real fixes. https://docs.crazygames.com/faq/

## Do not redo

- Do not add ads, banners, rewarded buttons, or adblock gates.
- Do not add instant multiplayer, room invites, or account login for this resubmit.
- Do not do Play Store or App Store work. The CrazyGames app is their WebView, not a store listing you ship.
- Do not retest iOS or Android smoothness unless input changes.
- Do not change the GitHub Pages base away from `/roadkeep/`.
- Do not load `crazygames-sdk-v3.js` on GitHub Pages.
- Do not sitelock the GitHub Pages preview. Players use `?portal=crazygames` there. A host check that only allows `crazygames.com` would break that preview.
