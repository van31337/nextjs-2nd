import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner';
import Card from '../components/card';

import coffeeStores from '../data/coffee-stores.json';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('hello');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>One of Van's websites</title>
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={'View your local stores'}
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStores) => {
            return (
              <Card
                name={coffeeStores.name}
                imgUrl={coffeeStores.imgUrl}
                href={`/coffee-store/{coffeeStores.id}`}
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
