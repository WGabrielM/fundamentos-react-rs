import { Post, PostType } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/WGabrielM.png",
      name: "Wellington Monteiro",
      role: "Ful Stack Development",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",',
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-11-28 09:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/WGabrielM.png",
      name: "Maria Lima",
      role: "Speech Therapist",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",',
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-11-28 09:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
