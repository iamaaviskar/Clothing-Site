export default function XIVCollections() {
  return (
    <section className="flex flex-col justify-start items-start px-10 py-12">
      <div className="w-full max-w-full space-y-10">
        <header className="font-beatrix-deck-trial text-black">
          <h1 className="font-extrabold text-[48px] leading-none">XIV</h1>
          <h2 className="font-extrabold text-[48px] leading-none">
            COLLECTIONS
          </h2>
          <h3 className="font-extrabold text-[48px] leading-none">23-24</h3>
        </header>

        <div className="flex justify-between items-center border-b border-gray-300 pb-3">
          <ul className="flex space-x-8 text-md font-medium text-gray-700">
            <li className="text-black font-semibold cursor-pointer">(ALL)</li>
            <li className="cursor-pointer hover:text-black">Men</li>
            <li className="cursor-pointer hover:text-black">Women</li>
            <li className="cursor-pointer hover:text-black">KID</li>
          </ul>

          <div className="flex space-x-8 text-md text-gray-700">
            <button className="hover:text-black">Filters(+)</button>
            <button className="hover:text-black">Sorts(-)</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "Basic Heavy Weight T-Shirt",
              type: "Cotton T Shirt",
              price: "$ 199",
              img: "XIV_collectionsPics/XIV_collections_1.png",
            },
            {
              title: "Soft Wash Straight Fit Jeans",
              type: "Cotton jeans",
              price: "$ 199",
              img: "newCollectionPics/newCollection_pic1.png",
            },
            {
              title: "Basic Heavy Weight T-Shirt",
              type: "Cotton T Shirt",
              price: "$ 199",
              img: "XIV_collectionsPics/XIV_collections_1.png",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{item.type}</p>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-sm mt-1">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="text-gray-700 hover:text-black">More ↓</button>
        </div>
      </div>
    </section>
  );
}
