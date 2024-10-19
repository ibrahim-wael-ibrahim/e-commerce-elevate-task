import PropTypes from "prop-types";

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default function ContentSection({
  title,
  description,
  imageSrc,
  reverse = false,
}) {
  return (
    <section
      className={`flex justify-center items-start ${
        reverse ? "flex-row-reverse" : ""
      } gap-4 p-8`}
    >
      <article className="flex flex-col gap-8 justify-start items-start h-full w-[500px]">
        <h1 className="text-customYellow text-3xl">{title}</h1>
        <p className="text-[#333333a8] text-l">{description}</p>
        <div className="flex items-end">
          <button className="flex justify-center items-center relative z-40 px-4 py-2 rounded-lg overflow-hidden transition-transform duration-1000 transform hover:-translate-y-2 before:absolute before:m-auto before:h-[0px] before:w-[0px] before:rounded-full hover:before:w-[200px] hover:before:h-[200px] before:bg-customYellow before:transition-all before:duration-1000 ease-in-out">
            <span className="relative z-10">Let&apos;s go to Shopping</span>
          </button>
        </div>
      </article>
      <article className="w-[400px] hidden md:flex justify-start items-start overflow-hidden">
        <img
          src={imageSrc}
          alt=""
          className="object-cover object-center"
          loading="lazy"
        />
      </article>
    </section>
  );
}
