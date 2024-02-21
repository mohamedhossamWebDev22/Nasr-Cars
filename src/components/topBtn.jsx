import { GoArrowUp } from "react-icons/go";

import { useState } from "react";

const TopBtn = () => {
  const [displayBtn, setdisplayBtn] = useState("hide");

  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setdisplayBtn("flex");
    } else {
      setdisplayBtn("hide");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <button onClick={topFunction} className={`back-to-top ${displayBtn}`}>
        <GoArrowUp />
      </button>
    </>
  );
};

export default TopBtn;
