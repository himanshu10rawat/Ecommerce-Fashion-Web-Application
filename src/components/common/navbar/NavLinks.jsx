"use client";

import Link from "next/link";
import links from "./links";
import { Fragment, useState } from "react";

export default function NavLinks() {
  const [hoverValue, setHoverValue] = useState("");
  const hoveredNavList = links.find(
    (link) => link.item === hoverValue.toLowerCase(),
  );

  return (
    <>
      <nav>
        <ul className="flex">
          {links.map(({ item, url }) => (
            <li className="text-xs md:text-sm" key={item}>
              <Link
                className={`relative md:pb-7.5 lg:pb-8 md:px-3 lg:px-4 after:content-[''] after:border-0 hover:after:border-3 ${hoverValue === item && "after:border-3 after:w-full"} after:border-amber-600 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full ${item === "men" ? "after:border-pink-600" : item === "women" ? "after:border-pink-400" : ""}`}
                onMouseEnter={() => setHoverValue(item)}
                onMouseLeave={() => setHoverValue("")}
                href={`/shop/${url}`}
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {hoverValue && (
        <div className="w-full absolute top-20 left-0 z-50 h-[calc(100dvh-80px)] bg-black/50 flex justify-center">
          <div
            onMouseEnter={() => setHoverValue(hoverValue)}
            onMouseLeave={() => setHoverValue("")}
            className="bg-white px-10 py-5 flex flex-col flex-wrap h-[75dvh] w-[90%] lg:w-[80%] overflow-auto"
          >
            {hoveredNavList &&
              hoveredNavList.categories.map((category) => {
                return (
                  <Fragment key={category.title}>
                    <div className="w-1/5 px-2 pb-2">
                      <Link
                        className={`text-sm capitalize font-semibold mb-2 inline-block ${hoverValue === "men" ? "text-pink-600" : hoverValue === "women" ? "text-pink-400" : ""}`}
                        href={category.url}
                      >
                        {category.title}
                      </Link>

                      <div className="flex flex-col">
                        {category.subCategories &&
                          category.subCategories.map((subcategory) => (
                            <Link
                              className="text-sm capitalize mb-2 transition hover:font-semibold"
                              key={subcategory.item}
                              href={subcategory.url}
                            >
                              {subcategory.item}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
