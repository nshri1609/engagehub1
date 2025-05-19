import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex justify-center gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[20rem] max-lg:w-full px-6 bg-gray-200 border border-n-7 rounded-[2rem] lg:w-[40rem] even:py-14 odd:py-8 odd:my-4"
        >
          <h4 className="h4 mb-4 text-n-8">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-8/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3 text-n-8">
                  ₹
                  </div>
                <div className="text-[2.5rem] md:text-[4.5rem] leading-none font-bold text-n-8">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:denysmakene@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                className="flex items-start py-5 border-t border-n-7"
                key={index}
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4 text-n-8">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
