import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/header/Header";
import { Mot } from "./components/mot/Mot";
import { Footer } from "./components/footer/Footer";
import { DessinHangman } from "./components/hangman/DessinHangman";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Mot />
      <DessinHangman />
      <Footer />
    </main>
  );
}
