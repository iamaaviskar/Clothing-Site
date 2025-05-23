export default function ApproachToFashion() {
  return (
    <section className="py-16 px-6 flex flex-col items-center text-center">
      <div className="max-w-4xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
          OUR APPROACH TO FASHION DESIGN
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          at elegant vogue , we blend creativity with craftsmanship to create
          fashion that transcends trends and stands the test of time. each
          design is meticulously crafted, ensuring the highest quality exquisite
          finish
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          "ApproachToFashionPics/ATF_1.png",
          "ApproachToFashionPics/ATF_2.png",
          "ApproachToFashionPics/ATF_3.png",
        ].map((src, index) => (
          <div key={index} className="overflow-hidden shadow-md">
            <img
              src={src}
              alt={`Fashion ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
