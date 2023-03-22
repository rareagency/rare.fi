import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import Button from "../Button";

export const ContactUsHeader = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("__next");
    if (el) {
      setRootElement(el);
    }
  }, []);

  return (
    <section
      id="contact-us-header"
      className="col-all layout-grid p-8 mt-64 md:mt-32"
    >
      <h2 className="h2-small col-start-2 col-span-4 leading-relaxed md:col-span-6 lg:col-start-1">
        You have a higher chance to succeed if we work together.
      </h2>
      {rootElement && (
        <>
          <Button
            label="Book our first no-obligation chat"
            onClick={() => setPopupOpen(true)} // openPopupWidget({ url: "https://calendly.com/riku-rare" }
            className="mt-10 mb-10 px-12 col-start-2 col-span-3 lg:col-start-1 lg:col-span-5 md:col-span-6 sm:col-span-7"
          >
            Book our first no&#8209;obligation chat
          </Button>
          <PopupModal
            url="https://calendly.com/riku-rare"
            onModalClose={() => setPopupOpen(false)}
            open={popupOpen}
            rootElement={rootElement}
          />
        </>
      )}
    </section>
  );
};
