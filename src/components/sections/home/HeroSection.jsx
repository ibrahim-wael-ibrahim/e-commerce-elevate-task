export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-60px)] bg-[url('/assets/image/hero-image.jpg')] bg-top bg-cover  bg-fixed text-customGray">
      <div className="grid justify-center items-center w-full h-full">
        <article className="mx-auto">
          <div className="p-8 backdrop-blur-sm rounded-tr-3xl rounded-bl-3xl border-2 border-customYellow">
            <div className="flex items-end relative">
              <h3 className="text-4xl pl-3 font-extrabold z-10">E-commerce</h3>
              <span className="absolute w-[250px] h-10 bg-customYellow rounded-tr-3xl rounded-bl-3xl"></span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
