import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../components/pageLayout';
import FullHeightScrollableContainer from '../components/scrollableContainer';

const BeerPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>S&apos;Beer Eck</title>
        <meta name="description" content="S'Beer Eck App" />
      </Head>

      <main>
        <PageLayout title={"S'Beer Eck"}>
          <FullHeightScrollableContainer>
            <Typography variant='body1'>Beers</Typography>
          </FullHeightScrollableContainer>
        </PageLayout>
      </main>
    </>
  );
};

export default BeerPage;