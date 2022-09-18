import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'components/layout';
import { Button, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <form className={styles.form}>
        <div className={styles.formTitle}>
          <div className={styles.loginTitle}>{`${t('login')}`}</div>
        </div>
        <TextField required label='Email' fullWidth size='small' sx={{ marginBottom: '16px' }} />
        <TextField required label='Password' fullWidth size='small' sx={{ marginBottom: '16px' }} />
        <div className='d-flex justify-content-between'>
          <a href='#' className='text-primary'>
            {`${t('forgotPwd')}?`}
          </a>
        </div>
        <div className={styles.actionBtns}>
          <Box display='flex' sx={{ gap: '10px' }}>
            <Button variant='contained' fullWidth>{`${t('login')}`}</Button>
            <Button variant='contained' fullWidth>{`${t('loginWithGoogle')}`}</Button>
          </Box>
        </div>
      </form>
      {/* <div className='text-center mt-4 mt-xl-5'>
        {t('login.dontHaveAccount')} <Link to='/sign-up'> {t('signUp.title')}</Link>
      </div> */}
    </Layout>
  );
};

export default Login;
