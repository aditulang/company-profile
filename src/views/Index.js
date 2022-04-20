import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Banner from "./index-sections/banner/Banner.js";
import VisiMisiKomitmen from "./index-sections/visimisi/Visimisi.js";
import Struktur from "./index-sections/struktur/Struktur.js";
import Layanan from "./index-sections/layanan/Layanan.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Teknologi from "./index-sections/teknologi/Teknologi.js";
import Portofolio from "./index-sections/portofolio/Portofolio.js";
import Indexcorousel from "./index-sections/Indexcorousel.js";
import Indexcorousel1 from "./index-sections/Indexcorousel1.js";
// import Examples from "./index-sections/Examples.js";
// import Tabs from "./index-sections/Tabs";
// import Images from "./index-sections/Images.js";
// import Navbars from "./index-sections/Navbars.js";
// import BasicElements from "./index-sections/BasicElements.js";
// import Pagination from "./index-sections/Pagination";
// import Notifications from "./index-sections/Notifications.js";
// import Typography from "./index-sections/Typography";
// import Javascript from "./index-sections/Javascript.js";
// import NucleoIcons from "./NucleoIcons.js";
// import CompleteExamples from "./index-sections/CompleteExamples.js";
// import SignUp from "./index-sections/SignUp.js";
// import Download from "./index-sections/Download.js";
import Fother from "./index-sections/fother/Fother.js";
import PTmarketama1 from "./index-sections/corosel/PTmarketama1.js";
import PTlogistik from "./index-sections/corosel/PTlogistik.js";
import PTjaminan from "./index-sections/corosel/PTJaminan.js";
import PTpupuk from "./index-sections/corosel/PTpupuk.js";
import PTpancaran from "./index-sections/corosel/PTpancaran.js";
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          .
          <Banner />
          <VisiMisiKomitmen />
          <Struktur />
          <Layanan />
          <Teknologi />
          <Portofolio />
          <Indexcorousel />
          <Indexcorousel1 />
          <PTmarketama1 />
          <PTlogistik />
          <PTjaminan />
          <PTpupuk />
          <PTpancaran />
          <Fother />
          {/* <Tabs />
          <Images />
          <Navbars />
          <BasicElements />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
