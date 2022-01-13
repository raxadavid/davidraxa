import Navbar from './components/common/navbar';
import Banner from './components/common/banner';
import GoToTopButton from './components/utilities/gototopbutton';

import './styles/style.css';

function App() {
  return (
   <>
    <Navbar />
    <GoToTopButton />
    <Banner />
    <br />
	  <hr class="lineAnimate" />
   </>
  );
}

export default App;
