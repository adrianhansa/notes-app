import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getNotes } from "../redux/actions/noteActions";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  const { notes, loading, error } = useSelector((state) => state.noteList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Notes App</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {notes &&
          notes.map((note) => {
            return (
              <p>
                {note.title} {note.description}
              </p>
            );
          })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
