import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@common';

import styles from './Layout.module.scss';

export const Layout = () => (
  <main className={styles.main}>
    <Header />

    <Outlet />

    <Footer />
  </main>
);
