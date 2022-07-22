import { useRef, useState } from "react";
import "./style.css";
import html2canvas from "html2canvas";

const ScreenShot = () => {
  const [images, setImages] = useState();
  const modalRef: any = useRef();
  const openModal = () => {
    modalRef.current.style.display = "block";
    setTimeout(() => {
      const element: any = document.querySelector("#apz");
      html2canvas(element, { logging: false }).then(
        (canvas: HTMLCanvasElement) => {
          const url: any = canvas.toDataURL();
          setImages(url);
          const a: any = document.createElement("a");
          a.href = url;
          a.download = "screenshot.png";
          a.click();
        }
      );
    }, 1000);
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
  };

  return (
    <>
      <div className="fab">
        <div className="fabBtn" onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-camera"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </div>
      </div>
      <div className="modal" ref={modalRef}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            x
          </span>
          <div className="imageWrapper">
            <img src={images} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenShot;
