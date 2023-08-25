type Props = {
  heading: String;
  body: String;
};

export const SubHeading = ({ heading, body }: Props) => {
  return (
    <>
      <h3 className="relative font-black w-fit text-[32px]">
        {heading}
        <span className=" absolute right-[-25px] top-[10px]">
          <svg
            width="44"
            height="40"
            viewBox="0 0 44 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#0669F7" fillOpacity="0.15" />
            <circle cx="40" cy="20" r="4" fill="#0669F7" />
          </svg>
        </span>
      </h3>
      <p className=" text-center md:px-48 px-24">{body}</p>
    </>
  );
};
