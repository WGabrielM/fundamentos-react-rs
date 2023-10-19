import { Post } from "./Post";
import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Wellington Gabriel" content="Bla bla bla" />
          <Post author="Wellington Gabriel" content="Bla bla bla" />
        </main>
      </div>
    </>
  );
}
