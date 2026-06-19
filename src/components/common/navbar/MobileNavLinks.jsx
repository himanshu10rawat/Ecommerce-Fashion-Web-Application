import Link from "next/link";
import links from "./links";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function MobileNavLinks() {
  const [expandItems, setExpandItems] = useState([]);

  return (
    <nav className="py-2">
      {links.map(({ item, url, categories }) => (
        <div key={item}>
          <div className="flex justify-between items-center">
            <Link
              className="px-4 py-3 capitalize font-semibold text-sm flex-1"
              href={url}
            >
              {item}
            </Link>

            {expandItems.find((expendItem) => expendItem === item) ? (
              <button
                aria-expanded
                className="px-4 py-3"
                onClick={() =>
                  setExpandItems((prev) =>
                    prev.filter((prevItem) => prevItem !== item),
                  )
                }
              >
                <ChevronDown className="text-gray-400 w-5 h-5" />
              </button>
            ) : (
              <button
                aria-expanded
                className="px-4 py-3"
                onClick={() => setExpandItems((prev) => [...prev, item])}
              >
                <ChevronRight className="text-gray-400 w-5 h-5" />
              </button>
            )}
          </div>
          {expandItems.find((expendItem) => expendItem === item) &&
            categories.map(({ title, url, subCategories }) => (
              <div className="pl-4" key={title}>
                <div className="flex items-center justify-between">
                  <Link
                    className="px-4 py-3 capitalize font-normal text-sm flex-1"
                    href={url}
                  >
                    {title}
                  </Link>

                  {subCategories &&
                    (expandItems.find((expendItem) => expendItem === title) ? (
                      <button
                        aria-expanded
                        className="px-4 py-3"
                        onClick={() =>
                          setExpandItems((prev) =>
                            prev.filter((prevItem) => prevItem !== title),
                          )
                        }
                      >
                        <ChevronDown className="text-gray-400 w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        aria-expanded
                        className="px-4 py-3"
                        onClick={() =>
                          setExpandItems((prev) => [...prev, title])
                        }
                      >
                        <ChevronRight className="text-gray-400 w-5 h-5" />
                      </button>
                    ))}
                </div>
                {expandItems.find((expendItem) => expendItem === title) &&
                  subCategories &&
                  subCategories.map(({ item, url }) => (
                    <div key={item} className="pl-4">
                      <Link
                        className="block px-4 py-3 capitalize font-normal text-sm flex-1"
                        href={url}
                      >
                        {item}
                      </Link>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      ))}
    </nav>
  );
}
