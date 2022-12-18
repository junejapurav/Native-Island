import './App.css';
import Header from './components/Header';
import Slider from './components/slider';
import Intro from './components/intro';
import Custombox from './components/custombox';
import Quality from './images/qualities';

function App() {
  return (
    <div>
    <Header/>
    <Slider/>
    <Intro/>
    <Custombox/>
    <Quality/>
    </div>
  );
}

export default App;
