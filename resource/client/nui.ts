import { loadLocaleTexts } from "@aicore8/lib/client";
import { NUI_LAYER } from "@aicore8/shared";

// Stacking among NUI pages (`NUI_LAYER`): set at start, not left to load order.
SetNuiZindex(NUI_LAYER.screen);

export const texts = loadLocaleTexts();
