import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from "react";
import Modal from "react-modal";

const Benefits = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const openModal = (benefit) => {
    setSelectedBenefit(benefit);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBenefit(null);
  };

  return (
    <Section id="features" className="bg-gray-200">
      <div className="container relative z-2">
        <div className="text-center mb-10">
          <Heading
            className="md:max-w-md lg:max-w-2xl mx-auto"
            title="Engage Hub Features"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-10 mb-10 ">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative block md:max-w-[24rem] bg-slate-700 bg-opacity-40 rounded-lg"
            >
              <div
                className="absolute inset-0  rounded-md"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />
              <div className="relative bg-gradient-to-t flex flex-col min-h-[22rem] p-[0.6rem] rounded-md z-10">
                <h5 className="h5 text-black font-bold shadow-md backdrop-blur-md px-4 py-2 rounded-md">
                  {item.title}
                </h5>
                <div
                  className="relative flex items-center mt-auto cursor-pointer backdrop-blur-sm px-4 py-2"
                  onClick={() => openModal(item)}
                >
                  <img src={item.iconUrl} alt={item.title} />
                  <p className="ml-auto font-code text-xx font-bold text-black uppercase shadow-lg">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>

        {selectedBenefit && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="rounded-lg p-8 max-w-lg mx-auto my-10 relative overflow-hidden bg-gray-200 border border-n-7"
            overlayClassName="fixed inset-0 bg-n-6 bg-opacity-50 z-50 flex items-center justify-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-lg text-n-8 hover:bg-orange-700"
            >
              ✕
            </button>
            <div className="overflow-y-auto max-h-[80vh] custom-scrollbar">
              <h2 className="text-2xl font-bold mb-4 text-center text-n-8">
                {selectedBenefit.tagline}
              </h2>
              <div className="flex flex-col items-start gap-4 text-justify text-n-8">
                <ul className="list-disc list-inside space-y-2">
                  {selectedBenefit.text1 && <li>{selectedBenefit.text1}</li>}
                  {selectedBenefit.text2 && <li>{selectedBenefit.text2}</li>}
                  {selectedBenefit.text3 && <li>{selectedBenefit.text3}</li>}
                </ul>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Section>
  );
};

export default Benefits;
