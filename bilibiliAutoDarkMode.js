// ==UserScript==
// @name         Bilibili Autodark Theme
// @namespace    bili-system-theme
// @author       iconquestion
// @version      1.0
// @description  让 *.bilibili.com 跟随系统深浅色
// @license      MIT
// @match        https://*.bilibili.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  /**
   * 从 BiliHeader 的 Vue 组件实例链中寻找内部 emitter。
   * B 站点击“深色/浅色”时，最终也是调用：
   * emitter.emit("themeChange", "dark" / "light")
   */
  function getBiliHeaderEmitter() {
    const roots = [
      document.querySelector(".bili-header"),
      document.querySelector(".bili-header__bar"),
      document.querySelector(".header-avatar-wrap"),
      ...document.querySelectorAll(".bili-header *")
    ].filter(Boolean);

    for (const el of roots) {
      let inst = el.__vueParentComponent;

      while (inst) {
        const emitter =
          inst.provides?.emitter ||
          inst.appContext?.provides?.emitter;

        if (emitter?.emit) return emitter;
        inst = inst.parent;
      }
    }

    return null;
  }

  /**
   * 读取浏览器暴露的系统主题偏好。
   * Windows 深浅色通常会映射到 prefers-color-scheme。
   */
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  /**
   * 调用 B 站 Header 的原生主题切换链路。
   * 这会复用它自己的 CSS、cookie、bili_dark class 和事件广播逻辑。
   */
  function setBiliTheme(theme) {
    const emitter = getBiliHeaderEmitter();
    if (!emitter) return false;

    emitter.emit("themeChange", theme === "dark" ? "dark" : "light");
    return true;
  }

  /**
   * Header 是异步渲染的，页面刚加载时 emitter 可能还不存在。
   * 因此做有限次数重试，等 Header 准备好后再切换。
   */
  function applyWhenReady(retry = 30) {
    if (setBiliTheme(getSystemTheme())) return;

    if (retry > 0) {
      setTimeout(() => applyWhenReady(retry - 1), 500);
    }
  }

  const systemThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");

  // 页面加载完成后，先同步一次当前系统主题。
  applyWhenReady();

  // 系统主题变化时，实时同步到 B 站页面。
  systemThemeMedia.addEventListener("change", () => {
    applyWhenReady();
  });
})();
