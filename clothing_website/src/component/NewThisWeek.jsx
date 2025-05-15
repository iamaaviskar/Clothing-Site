import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function NewThisWeek() {
  const collections = [
    {
      imageSrc: "./newThisWeekPics/new-week-1.png",
      tShirt: "V-Neck T-Shrit",
      tShirtName: "Embroidered Seersucker Shirt",
      price: "99",
    },
    {
      imageSrc: "./newThisWeekPics/new-week-2.png",
      tShirt: "Cotton T-Shrit",
      tShirtName: "Basic Slim Fit T-Shirt",
      price: "99",
    },
    {
      imageSrc: "./newThisWeekPics/new-week-3.png",
      tShirt: "Henley T-Shirt",
      tShirtName: "Blurred Print T-Shirt",
      price: "99",
    },
    {
      imageSrc: "./newThisWeekPics/new-week-4.png",
      tShirt: "Crewneck T-Shirt",
      tShirtName: "Full Sleeve Zipper",
      price: "99",
    },
    {
      imageSrc: "./newThisWeekPics/new-week-1.png",
      tShirt: "V-Neck T-Shrit",
      tShirtName: "Embroidered Seersucker Shirt",
      price: "99",
    },
    {
      imageSrc: "./newThisWeekPics/new-week-2.png",
      tShirt: "Cotton T-Shrit",
      tShirtName: "Basic Slim Fit T-Shirt",
      price: "99",
    },
    {
      imageSrc: "./newThisWeekPics/new-week-3.png",
      tShirt: "Henley T-Shirt",
      tShirtName: "Blurred Print T-Shirt",
      price: "99",
    },
    {
      imageSrc: "./newThisWeekPics/new-week-4.png",
      tShirt: "Crewneck T-Shirt",
      tShirtName: "Full Sleeve Zipper",
      price: "99",
    },
  ];

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild
        ? carouselRef.current.firstChild.offsetWidth + 20
        : 300;

      const scrollAmount = cardWidth * 1;

      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="flex flex-col justify-evenly items-start p-12">
        <div className="font-beatrix-deck-trial font-extrabold text-[48px] leading-none space-x-4 p-1 flex flex-col w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col relative">
              <p>NEW</p>
              <p>THIS WEEK</p>
              <p className="absolute translate-x-64 translate-y-8 font-normal text-[18px] text-[#000E8A]">
                (50)
              </p>
            </div>
            <p className="font-normal text-[16px] cursor-pointer hover:underline">
              See all
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div
            ref={carouselRef}
            className="carousel flex gap-6 overflow-x-auto scroll-smooth py-4 px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {collections.map((collection, index) => (
              <div key={index} className="card flex-shrink-0 w-72 space-y-2">
                <figure className="h-fit w-full rounded-none">
                  <img
                    src={collection.imageSrc}
                    alt={collection.tShirtName}
                    className="object-cover"
                  />
                </figure>
                <p className="text-[12px] font-beatrix-deck-trial px-2">
                  {collection.tShirt}
                </p>
                <div className="flex justify-between px-2">
                  <p className="text-[14px] font-beatrix-deck-trial">
                    {collection.tShirtName}
                  </p>
                  <p className="text-[14px] font-beatrix-deck-trial">
                    ${collection.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button
              onClick={() => scroll("left")}
              className="btn btn-circle bg-white/80 hover:bg-white text-gray-800 shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft size={28} strokeWidth={1.9} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="btn btn-circle bg-white/80 hover:bg-white text-gray-800 shadow-md"
              aria-label="Next"
            >
              <ChevronRight size={28} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
