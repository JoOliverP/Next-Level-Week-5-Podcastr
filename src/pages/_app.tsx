import '../styles/global.scss'
import styles from '../styles/app.module.scss';


import { Player } from '../components/Player';
import { Header } from '../components/Header';
import { PlayerContextProviver } from '../contexts/PlayerContext';




function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProviver>
    <div className={styles.wrapper}>
      <main>
          <Header/>
          <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContextProviver>
  );
}

export default MyApp
