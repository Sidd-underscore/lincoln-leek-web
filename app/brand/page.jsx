import { Footer } from "@/components/ui/footer";
import { Link } from "@/components/ui/link";
import { ModeToggle } from "@/components/ui/theme-switcher";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const metadata = {
  title: "Brand",
};

export const brand = {
  colors: {
    emerald: [
      {
        hex: "#ecfdf5",
        label: "50",
        rgb: "rgb(236, 253, 245)",
      },
      {
        hex: "#d1fae5",
        label: "100",
        rgb: "rgb(209, 250, 229)",
      },
      {
        hex: "#a7f3d0",
        label: "200",
        rgb: "rgb(167, 243, 208)",
      },
      {
        hex: "#6ee7b7",
        label: "300",
        rgb: "rgb(110, 231, 183)",
      },
      {
        hex: "#34d399",
        label: "400",
        rgb: "rgb(52, 211, 153)",
      },
      {
        hex: "#10b981",
        label: "500",
        rgb: "rgb(16, 185, 129)",
      },
      {
        hex: "#059669",
        label: "600",
        rgb: "rgb(5, 150, 105)",
      },
      {
        hex: "#047857",
        label: "700",
        rgb: "rgb(4, 120, 87)",
      },
      {
        hex: "#065f46",
        label: "800",
        rgb: "rgb(6, 95, 70)",
      },
      {
        hex: "#064e3b",
        label: "900",
        rgb: "rgb(6, 78, 59)",
      },
      {
        hex: "#022c22",
        label: "950",
        rgb: "rgb(2, 44, 34)",
      },
    ],
    stone: [
      {
        hex: "#fafaf9",
        label: "50",
        rgb: "rgb(250, 250, 249)",
      },
      {
        hex: "#f5f5f4",
        label: "100",
        rgb: "rgb(245, 245, 244)",
      },
      {
        hex: "#e7e5e4",
        label: "200",
        rgb: "rgb(231, 229, 228)",
      },
      {
        hex: "#d6d3d1",
        label: "300",
        rgb: "rgb(214, 211, 209)",
      },
      {
        hex: "#a8a29e",
        label: "400",
        rgb: "rgb(168, 162, 158)",
      },
      {
        hex: "#78716c",
        label: "500",
        rgb: "rgb(120, 113, 108)",
      },
      {
        hex: "#57534e",
        label: "600",
        rgb: "rgb(87, 83, 78)",
      },
      {
        hex: "#44403c",
        label: "700",
        rgb: "rgb(68, 64, 60)",
      },
      {
        hex: "#292524",
        label: "800",
        rgb: "rgb(41, 37, 36)",
      },
      {
        hex: "#1c1917",
        label: "900",
        rgb: "rgb(28, 25, 23)",
      },
      {
        hex: "#0c0a09",
        label: "950",
        rgb: "rgb(12, 10, 9)",
      },
    ],
  },
  images: {
    banners: {
      dark: "/brand/leek-banner-dark.png",
      light: "/brand/leek-banner-light.png",
    },
    logos: {
      favicon: {
        svg: "/brand/leek-logo-favicon.svg",
        png: "/brand/leek-logo-favicon.png",
      },
      logo: {
        svg: "/brand/leek-logo-main.svg",
        png: "/brand/leek-logo-main.png",
      },
    },
    fonts: {
      heading: {
        name: "Heading",
        fontName: "DM Serif Display",
        className: "font-heading",
        src: {
          regular: { ttf: "/fonts/DMSerifDisplay-Regular.ttf" },
          italic: { ttf: "/fonts/DMSerifDisplay-Italic.ttf" },
        },
        link: "https://fonts.google.com/specimen/DM+Serif+Display",
      },
      body: {
        name: "Body",
        fontName: "Geist",
        className: "font-sans",
        src: {
          regular: {
            otf: "/fonts/Geist-Regular.otf",
            woff2: "/fonts/Geist-Regular.woff2",
          },
        },
        link: "https://vercel.com/font",
      },
      mono: {
        name: "Mono",
        fontName: "Geist Mono",
        className: "font-mono",
        src: {
          regular: {
            otf: "/fonts/GeistMono-Regular.otf",
            woff2: "/fonts/GeistMono-Regular.woff2",
          },
        },
        link: "https://vercel.com/font",
      },
    },
    socialCard: "/brand/leek-socialcard.png",
  },
};

export default function SubmitPage() {
  return (
    <>
      <div className="prose prose-stone mt-24 flex max-w-none justify-center p-12 dark:prose-invert xl:prose-xl prose-h1:text-7xl">
        <div>
          <h1 className="font-heading italic">Our Brand</h1>
          <p>
            Want to use our brand assets in your own stuff? Here you go! Please,
            do not modify or reformat the logo to preserve authentic brand
            identity.
          </p>
          <div className="p-2">
            <div>
              <h2>Images</h2>

              <div className="mt-4 2xl:contents">
                <h3 className="2xl:col-end-1 2xl:pt-2.5">Logos</h3>
                <div className="mt-3 grid max-w-screen-sm grid-cols-2 grid-rows-1 gap-6">
                  {Object.entries(brand.images.logos).flatMap(
                    ([key, value]) => (
                      <div>
                        <strong className="capitalize">{key}</strong>

                        <div className="flex w-full cursor-text items-center gap-x-3 sm:block sm:space-y-1.5">
                          <Image
                            src={value.png}
                            alt={`${key} Logo`}
                            width={500}
                            height={500}
                            className="rounded-full shadow-sm ring-1 ring-inset ring-stone-950/10 dark:ring-white/10"
                          />
                        </div>

                        <p className="flex items-center">
                          <DownloadIcon className="mr-2 h-6 w-6" /> Download:{" "}
                          <a href={value.svg} className="mx-2 " download>
                            SVG
                          </a>
                          or
                          <a href={value.png} className="mx-2 " download>
                            PNG
                          </a>
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-4 2xl:contents">
                <div className="className=2xl:col-end-1 2xl:pt-2.5">
                  <h3>Banners</h3>
                  <p className="flex items-center text-base">
                    Switch this page between light and dark mode to view both
                    images in their dedicated environment.{" "}
                    <ModeToggle className="ml-2" />
                  </p>
                </div>

                <div className="mt-3 grid max-w-screen-sm grid-cols-2 grid-rows-1 gap-6">
                  {Object.entries(brand.images.banners).flatMap(
                    ([key, value]) => (
                      <div key={value}>
                        <strong className="capitalize">For {key} mode</strong>

                        <div className="flex w-full cursor-text items-center gap-x-3 rounded-md bg-gradient-to-br sm:block sm:space-y-1.5">
                          <Image
                            src={value}
                            alt={`${key} Logo`}
                            className="rounded-md shadow-sm ring-1 ring-inset ring-stone-950/10 dark:ring-white/10"
                            width={500}
                            height={500}
                          />
                        </div>

                        <p className="flex items-center">
                          <DownloadIcon className="mr-2 h-6 w-6" /> Download:{" "}
                          <a href={value} className="mx-2 " download>
                            PNG
                          </a>
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div>
              <h2>Colors</h2>

              <div className="mt-4 2xl:contents">
                <h3 className="2xl:col-end-1 2xl:pt-2.5">Emerald</h3>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0 ">
                  {brand.colors.emerald.map((color) => (
                    <div
                      key={color.label}
                      className="flex w-full cursor-text items-center gap-x-3 sm:block sm:space-y-1.5"
                    >
                      <div
                        className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                        style={{ backgroundColor: color.rgb }}
                      />
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium 2xl:w-full">
                          {color.label}
                        </div>
                        <div className="font-mono text-xs lowercase text-slate-500 dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                          {color.hex}
                        </div>
                        <div className="font-mono text-xs lowercase text-slate-500 dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                          {color.rgb}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 2xl:contents">
                <h3 className="2xl:col-end-1 2xl:pt-2.5">Stone</h3>
                <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0 ">
                  {brand.colors.stone.map((color) => (
                    <div
                      key={color.label}
                      className="flex w-full cursor-text items-center gap-x-3 sm:block sm:space-y-1.5"
                    >
                      <div
                        className="h-10 w-10 rounded ring-1 ring-inset ring-stone-950/10 dark:ring-white/10 sm:w-full"
                        style={{ backgroundColor: color.rgb }}
                      />
                      <div className="px-0.5">
                        <div className="w-6 text-xs font-medium 2xl:w-full">
                          {color.label}
                        </div>
                        <div className="font-mono text-xs lowercase text-slate-500 dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                          {color.hex}
                        </div>
                        <div className="font-mono text-xs lowercase text-slate-500 dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                          {color.rgb}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2>Fonts</h2>

              {Object.entries(brand.images.fonts).flatMap(([key, value]) => (
                <div key={JSON.stringify(value)} className="mb-6">
                  <strong className="mb-4 capitalize">
                    {value.name} - {value.fontName}
                  </strong>

                  <div
                    className={`flex w-full cursor-text items-center gap-x-3 sm:block sm:space-y-1.5 ${value.className}`}
                  >
                    <h1 className="!m-0">{value.fontName}</h1>
                    <h2>{value.fontName}</h2>
                    <h3>{value.fontName}</h3>
                    <strong>{value.fontName}</strong>
                    <br /> <i>{value.fontName}</i>
                    <p>{value.fontName}</p>
                  </div>

                  <a href={value.link} className="mt-4" target="_blank">
                    More info on this font
                  </a>

                  {Object.entries(value.src).flatMap(([key, value]) => (
                    <p
                      key={JSON.stringify(value)}
                      className="flex items-center"
                    >
                      <DownloadIcon className="mr-2 h-6 w-6" /> Download {key}{" "}
                      font:{" "}
                      {value.ttf && (
                        <a href={value.ttf} className="mx-2 " download>
                          TTF
                        </a>
                      )}
                      {value.otf && (
                        <a href={value.otf} className="mx-2 " download>
                          OTF
                        </a>
                      )}
                      {value.woff2 && (
                        <>
                          {" "}
                          or
                          <a href={value.woff2} className="mx-2 " download>
                            WOFF2
                          </a>
                        </>
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
