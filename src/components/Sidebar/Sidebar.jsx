import React from "react";
import styles from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=50"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/WGabrielM.png" />
        <strong>Wellington Gabriel</strong>
        <span>Web Development</span>
      </div>

      <footer>
        
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
          </a>
      </footer>
    </aside>
  );
}
