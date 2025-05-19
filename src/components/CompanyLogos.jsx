import { companyLogos } from "../constants";
import Marquee from "react-fast-marquee";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} py-4  relative`}>
      <h5 className="tagline mb-8 text-center text-n-8/50">
        Helping people create beautiful content at
      </h5>
      <Marquee speed={100} loop={0}>
        {companyLogos.map((logo, index) => (
          <div
            className="flex items-center mx-16 h-[6rem] w-[8rem] rounded-lg p-4"
            key={index}
          >
            <img
              src={logo}
              className="h-lg w-full rounded-full"
              style={{ objectFit: "contain" }}
              alt={`Company logo ${index + 1}`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyLogos;
