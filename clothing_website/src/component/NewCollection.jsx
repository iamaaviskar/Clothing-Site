import { MoveRight } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function NewCollection() {
  return (
    <>
      <div className="grid grid-cols-3 ml-14 mt-14 h-auto gap-2">
        <div className="font-beatrix-deck-trial font-extrabold text-[48px] leading-none">
          <div className="mb-3">
            <h2 className="text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
              NEW
            </h2>
            <span className="text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
              COLLECTION
            </span>
          </div>

          <div className="font-normal text-xl">
            <p>Summer</p>
            <p>2024</p>
          </div>

          <div className="mt-40 flex justify-between">
            <button className="btn w-80 rounded-none bg-[#D9D9D9] flex flex-row justify-between">
              <span className="text-[16px] font-beatrix-deck-trial ">
                Go to Shop
              </span>
              <span>
                <MoveRight size={50} opacity={0.8} strokeWidth={1} />
              </span>
            </button>
            <div className="space-x-2 flex">
              <button className="inline-flex cursor-pointer rounded-none btn w-fit p-2 min-w-0 min-h-0 hover:brightness-95">
                <ChevronLeft size={28} strokeWidth={1.9} />
              </button>
              <button className="inline-flex cursor-pointer rounded-none btn w-fit p-2 min-w-0 hover:brightness-95">
                <ChevronRight size={28} strokeWidth={1.9} />
              </button>
            </div>
          </div>
        </div>

        <div className="ml-15">
          <img
            src="./newCollectionPics/newCollection_pic1.png"
            alt="Trousers"
            className="object-cover h-100"
          />
        </div>
        <div className="">
          <img
            src="./newCollectionPics/newCollection_pic2.png"
            alt="Black T-shirt"
            className="object-cover h-100"
          />
        </div>
      </div>
    </>
  );
}
