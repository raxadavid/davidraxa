import Navbar from './components/common/navbar';
import Banner from './components/common/banner';
import BannerButtons from './components/common/banner-buttons';
import PortfolioItems from './components/portfolio';
import GoToTopButton from './components/utilities/gototopbutton';
import { ITEMS } from './components/assets';

import './styles/style.css';

function App() {
  return (
   <>
    <Navbar />
    <GoToTopButton />
    <Banner />
    <br />
	  <hr className="lineAnimate" />
    <div className="main">
      <BannerButtons />
      <div className="gallery">
        <div className="row">
          <PortfolioItems items={ITEMS} />
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
