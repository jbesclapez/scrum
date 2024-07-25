import { useState, useEffect, useCallback } from "react";
import { Theme, AutoTheme } from "types/view";

/** this hook return the theme that should be used, regarding the current system preferences. */
export const useAutoTheme = (theme: Theme): AutoTheme => {
  const getInitialAutoTheme = useCallback((): AutoTheme => {
    return "dark";
  }, []);

  const [autoTheme, setAutoTheme] = useState<AutoTheme>(getInitialAutoTheme());

  // update the theme. always use dark mode.
  useEffect(() => {
    setAutoTheme("dark");
  }, []);

  return autoTheme;
};
