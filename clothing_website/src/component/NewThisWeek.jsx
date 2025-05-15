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

  return (
    <>
      <section className="flex flex-col justify-evenly items-start p-12">
        <div className="font-beatrix-deck-trial font-extrabold text-[48px] leading-none space-x-4 p-1 flex flex-col w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col relative ">
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

        <div className="carousel rounded-box max-w-full space-x-4 p-4">
          <div className="carousel-item carousel flex flex-row gap-6">
            {collections.map((collection, index) => {
              return (
                <div className="space-y-2" key={index}>
                  <img src={collection.imageSrc} className="rounded-none" />
                  <p className="text-[12px] font-beatrix-deck-trial">
                    {collection.tShirt}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[14px] font-beatrix-deck-trial">
                      {collection.tShirtName}
                    </p>
                    <p className="text-[14px] font-beatrix-deck-trial">
                      ${collection.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
