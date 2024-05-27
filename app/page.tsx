/* eslint-disable @next/next/no-async-client-component */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // const data = await getServerSession()
  const { data: session } = useSession()


  // console.log("session", session)

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
         {!session ? (
        <>
          <p>Not signed in</p>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <main className={styles.main}>
          <div className={styles.header}>
            <h4>Signed in as {session?.user?.name}</h4>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
          <h1 className={styles.title}>My Blog</h1>
        </main>
      )}
      </div>
    </main>
  );
}
