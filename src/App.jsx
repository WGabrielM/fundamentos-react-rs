import { Post } from "./Post";
import { Header } from "./components/Header/Header";
import './styles.css';
export function App() {
  return (
    <>
      <Header />
      
      <Post
        author="Wellington Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit soluta asperiores qui velit omnis sapiente, iusto ea! Quisquam, molestiae? Ab reiciendis laborum voluptas officiis, quas hic minima ipsam quos!"
      />
    </>
  );
}
