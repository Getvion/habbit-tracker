import React from 'react';

import { Footer, Header } from '@common';

import styles from './Main.module.scss';

export const Main = () => (
  <main className={styles.main}>
    <Header />
    <div className={styles.content}>content</div>
    <Footer />
  </main>
);
