import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "The Travel Diary",
  subTitle: "Our Journey Through 15 Years of Travel",
  brandTitle: "The Travel Diary",

  description: "A travel blog sharing our experiences and honest reviews from 15 years of exploring the world",

  site: "https://travel.blogs.pbxly.com",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
  ],

  username: "The Travel Diary",
  sign: "Our travel stories.",
  avatarUrl: "/avatar.png",
  socialLinks: [
    // {
    //   icon: "line-md:github-loop",
    //   link: "https://github.com/vijayg10",
    // },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  // Add your travel photos to public/banners/ folder and uncomment the paths below
  banners: [
    "/banners/indonesia1.jpeg",
    "/banners/indonesia2.jpeg",
    "/banners/indonesia3.jpeg",
    "/banners/indonesia4.jpeg",
    "/banners/indonesia5.jpeg",
    "/banners/indonesia6.jpeg",
    "/banners/malasia1.jpeg",
    "/banners/maldives1.JPG",
    "/banners/maldives2.JPG",
    "/banners/mauritius1.JPG",
    "/banners/mauritius2.JPG",
    "/banners/mauritius3.JPG",
    "/banners/mauritius4.JPG",
    "/banners/singapore1.jpeg",
    "/banners/singapore2.jpeg",
    "/banners/singapore3.jpeg",
    "/banners/taiwan1.jpg",
    "/banners/taiwan2.jpg",
    "/banners/taiwan3.jpg",
    "/banners/taiwan4.jpg",
    "/banners/thailand1.JPG",
    "/banners/thailand2.JPG",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "Unknown",
    url: "https://some-license-url/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
