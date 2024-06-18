"use client";

import {
  DownloadIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";
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
import { Button } from "../ui/button";

export function Fonts({ fonts }) {
  const [selectedFont, setSelectedFont] = useState();
  const [fontProperties, setFontProperties] = useState({
    size: 18,
    bold: false,
    italic: false,
  });

  const [lastChanged, setLastChanged] = useState();

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

        if (7 < newValue && newValue < 97) {
          var old = { ...fontProperties };
          old.size = newValue;
          setFontProperties(old);
        }
      }
    }, 1); // TODO: find a better solution to this

    return () => clearTimeout(delayDebounceFn);
  }, [lastChanged, fontProperties]);

  useEffect(() => {
    if (input.current) {
      input.current.value = fontProperties.size ? fontProperties.size : 18;
    }
  }, [fontProperties.size]);

  return (
    <div>
      <h2>Fonts</h2>

      {selectedFont ? (
        <div>
          <div className="flex items-center space-x-2">
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

            <Button
              variant={fontProperties.bold ? "default" : "outline"}
              onClick={() => {
                var oldValue = { ...fontProperties };

                oldValue.bold
                  ? (oldValue.bold = false)
                  : (oldValue.bold = true);

                setFontProperties(oldValue);
              }}
              className="aspect-square h-9 w-9 p-1 rounded-md"
            >
              <FontBoldIcon />
            </Button>

            <Button
              variant={fontProperties.italic ? "default" : "outline"}
              className="aspect-square h-9 w-9 p-1 rounded-md"
              onClick={() => {
                var oldValue = { ...fontProperties };

                oldValue.italic
                  ? (oldValue.italic = false)
                  : (oldValue.italic = true);

                setFontProperties(oldValue);
              }}
            >
              <FontItalicIcon />
            </Button>

            <div className="flex w-full items-center space-x-2">
              <Input
                defaultValue={fontProperties.size ? fontProperties.size : 18}
                type="number"
                min={8}
                max={96}
                ref={input}
                className="w-16 text-center"
                onChange={() => setLastChanged(Date.now())}
              />
              <Slider
                value={[fontProperties.size]}
                className="w-full"
                max={96}
                min={8}
                step={1}
                onValueChange={(newValue) => {
                  var old = { ...fontProperties };
                  old.size = newValue;
                  setFontProperties(old);
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <div
              className={`flex w-full cursor-text items-center gap-x-3 sm:block sm:space-y-1.5 `}
            >
              <Input
                className={
                  "my-2 h-auto rounded-md px-4 py-2" +
                  selectedFont.className
                }
                style={{
                  fontSize: fontProperties.size ? fontProperties.size : 18,
                  fontWeight: fontProperties.bold ? "bold" : "normal",
                  fontStyle: fontProperties.italic ? "italic" : "normal",
                }}
                placeholder={selectedFont.fontName}
                defaultValue={selectedFont.fontName}
              />{" "}
            </div>

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
              className="mt-4 text-sm text-stone-400 transition hover:text-stone-900 dark:hover:text-stone-50"
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
