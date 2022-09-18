import React from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import headPhoneImg from 'assets/images/headphone.png';
import logoImg from 'assets/images/logo.png';
import { ReactComponent as AppStore } from 'assets/images/app-store.svg';
import { ReactComponent as GooglePlay } from 'assets/images/google-play.svg';

import styles from './index.module.scss';

const Layout = ({ children }: { children: React.ReactElement }) => {
  const { t } = useTranslation();

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item md={5} sx={{ bgcolor: 'primary.main' }} className={styles.leftWrap}>
        <h1>Sound Cloud</h1>
        <h3>{`${t('shareMusic')}`}</h3>
        <div className={styles.headphoneImg}>
          <img src={headPhoneImg} alt='head phone' />
        </div>
      </Grid>
      <Grid item md={7} className={styles.rightForm} sx={{ flexDirection: 'column' }}>
        <img src={logoImg} alt='Sound Cloud' />
        {children}
        <div className={styles.appLink}>
          <a href='#'>
            <AppStore />
          </a>
          <a href='#'>
            <GooglePlay />
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default Layout;
