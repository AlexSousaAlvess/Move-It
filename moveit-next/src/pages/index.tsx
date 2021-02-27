import React from "react";
import { ExperienceBar } from "../components/ExperienceBar";

import Head from 'next/head';

import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import style from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}