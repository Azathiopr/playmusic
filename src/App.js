import './App.css';
import s from './Global.module.scss'
import PlayBar from './components/PlayBar/PlayBar';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className={s.wrapper}>
      <MainPage />
      <PlayBar />
    </div>
  );
}

export default App;
