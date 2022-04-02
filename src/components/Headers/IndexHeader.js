import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";
// core components
import loginusa1 from "../../assets/img/loginusa 1.png";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/background biru.png").default + ")",
          }}
          ref={pageHeader}
        ></div>
      </div>
    </>
  );
}

export default IndexHeader;
