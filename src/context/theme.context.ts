import type { Theme } from "@/providers/theme.provider";
import { createContext } from "react";
// import { createContext } from "vm";

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);