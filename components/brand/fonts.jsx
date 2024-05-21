"use client";

import { DownloadIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "../ui/input";

export function Fonts({ fonts }) {
  const [selectedFont, setSelectedFont] = useState();

  const [lastChanged, setLastChanged] = useState();
  const [fontSize, setFontSize] = useState([18]);

  const input = useRef(null);

  useEffect(() => {
    if (!selectedFont) {
      Object.entries(fonts).flatMap(([key, value]) => {
        if (value.name === "Body") {
          setSelectedFont(value);
        }
      });
    }
  }, [selectedFont, fonts]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (input.current) {
        const newValue = Number(input.current.value);

        if (7 < newValue && newValue < 97) setFontSize([newValue]);
      }
    }, 1); // TODO: find a better solution to this

    return () => clearTimeout(delayDebounceFn);
  }, [lastChanged]);

  useEffect(() => {
    if (input.current) {
      input.current.value = fontSize[0];
    }
  }, [fontSize]);

  return (
    <div>
      <h2>Fonts</h2>

      {selectedFont ? (
        <div>
          <div className="flex items-center space-x-4">
            <Select onValueChange={setSelectedFont} value={selectedFont}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(fonts).flatMap(([key, value]) => {
                  return (
                    <SelectItem key={key} value={value}>
                      {value.name} - {value.fontName}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            <div className="flex w-full items-center space-x-2">
              <Input
                defaultValue={fontSize[0]}
                type="number"
                min={8}
                max={96}
                ref={input}
                className="w-16 text-center"
                onChange={(e) => setLastChanged(Date.now())}
              />
              <Slider
                value={fontSize}
                className="w-full"
                max={96}
                min={8}
                step={1}
                onValueChange={setFontSize}
              />
            </div>
          </div>

          <div className="mb-6">
            <div
              className={`flex w-full cursor-text items-center gap-x-3 sm:block sm:space-y-1.5 `}
            >
              <Input className={"h-auto bg-neutral-100 dark:bg-neutral-900 rounded-md py-2 px-4 my-2 " + selectedFont.className} style={{ fontSize: fontSize[0] }} placeholder={selectedFont.fontName}  defaultValue={selectedFont.fontName} />            </div>

            {Object.entries(selectedFont.src).flatMap(([key, value]) => (
              <p
                key={JSON.stringify(value)}
                className="flex items-center text-sm"
              >
                <DownloadIcon className="mr-2 h-5 w-5" /> Download {key} font:{" "}
                {value.ttf && (
                  <a href={value.ttf} className="mx-2 text-sm" download>
                    TTF
                  </a>
                )}
                {value.otf && (
                  <a href={value.otf} className="mx-2 text-sm" download>
                    OTF
                  </a>
                )}
                {value.woff2 && (
                  <>
                    {" "}
                    or
                    <a href={value.woff2} className="mx-2 text-sm" download>
                      WOFF2
                    </a>
                  </>
                )}
              </p>
            ))}

            <a
              href={selectedFont.link}
              className="mt-4 text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition"
              target="_blank"
            >
              More info on this font
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
