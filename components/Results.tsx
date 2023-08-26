import React from "react";

export const Results = ({
  color,
  isNeeded,
}: {
  color: String | "#00142D";
  isNeeded: boolean;
}) => {
  return (
    <section id="result" className=" mb-16 w-full flex flex-col gap-8">
      {isNeeded && (
        <h2 className="text-center text-[32px] font-bold">
          Intelligent Websites That Work Overtime <br /> For Marketing Results
        </h2>
      )}
      <div
        className={`bg-[${color}] text-white flex flex-wrap justify-evenly items-center text-center p-12 gap-8`}
      >
        <div className="flex flex-col gap-8">
          <h3 className="text-[40px] font-bold ">25+</h3>
          <p className="text-[20px]">
            Years of <br /> Experience
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-[40px] font-bold ">38+</h3>
          <p className="text-[20px]">
            Expert <br /> Team Member
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-[40px] font-bold">3k+</h3>
          <p className="text-[20px]">
            Project <br /> Complete
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-[40px] font-bold ">99%</h3>
          <p className="text-[20px]">
            Clients <br /> Satisfied
          </p>
        </div>
      </div>
    </section>
  );
};
