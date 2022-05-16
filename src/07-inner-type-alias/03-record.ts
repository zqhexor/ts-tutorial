/**
 * Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型
 * 实现:
      type Record<K extends keyof any, T> = {
        [P in K]: T;
      };
 */

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const page: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
