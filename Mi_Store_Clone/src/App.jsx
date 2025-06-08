import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";
function App() {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />

<Routes>
<Route
          exact
          path="/miphones"
          element={
            <NavOptions miPhones={data.miPhones}
            />
          }
        />
        <Route
          exact
          path="/redmiphones"
          element={
            <NavOptions redmiPhones={data.redmiPhones}
            />
          }
        />
  <Route
          exact
          path="/tv"
          element={
            <NavOptions tv={data.tv} 
            />
          }
        />

<Route
          exact
          path="/laptops"
          element={
            <NavOptions laptop={data.laptop}
            />
          }
        />
<Route
          exact
          path="/lifestylenav"
          element={
            <NavOptions fitnessAndLifeStyle={data.fitnessAndLifeStyle}
            />
          }
        />

<Route
          exact
          path="/homenav"
          element={
            <NavOptions home={data.home}
            />
          }
        />

<Route
          exact
          path="/audio"
          element={
            <NavOptions audio={data.audio}
            />
          }
        />
        <Route
          exact
          path="/accessories"
          element={
            <NavOptions accessories={data.accessories}
            />
          }
        />


</Routes>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />

        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />

        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />

        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="Videos"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </BrowserRouter>
  );
}

export default App;
