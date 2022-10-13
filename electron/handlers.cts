export const handlers = ({ nativeTheme }: typeof import("electron")) => ({
  darkMode: {
    toggle() {
      if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = "light";
      } else {
        nativeTheme.themeSource = "dark";
      }
      return nativeTheme.shouldUseDarkColors;
    },
  },
} as const);

/** type definitions */

const _typechecker: (electron: typeof import("electron")) => GeneralHandlers =
  handlers;
type GeneralHandlers = {
  [namespace: string]: {
    [name: string]: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any;
  };
};
type ClientSide<H extends GeneralHandlers> = {
  [namespace in keyof H]: {
    [name in keyof H[namespace]]: H[namespace][name] extends
      ((e: any, ...args: infer A) => Promise<infer R>)
      ? (...args: A) => Promise<R>
      : H[namespace][name] extends (() => Promise<infer R>) ? () => Promise<R>
      : H[namespace][name] extends ((e: any, ...args: infer A) => infer R)
        ? (...args: A) => Promise<R>
      : H[namespace][name] extends (() => infer R) ? () => Promise<R>
      : never;
  };
};
declare global {
  type Handlers = ClientSide<ReturnType<typeof handlers>>;
}
