import './App.css';
import Header from './components/Header';
import Slider from './components/slider';
import Intro from './components/intro';
import Custombox from './components/custombox';
import Quality from './components/qualities';
import Foot from './components/footer';

function App() {
  return (
    <div>
    <Header/>
    <Slider/>
    <Intro/>
    <Custombox/>
    <Quality/>
    <Foot/>
    </div>
  );
}

export default App;
