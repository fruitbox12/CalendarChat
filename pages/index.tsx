import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button, useToast } from '@chakra-ui/react'
import { Loader } from '../components'

const Home: NextPage = () => {
  const toast = useToast()
  const status = 'success'
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader show={ true } />
      <Link href="/enter">
        <Button>
          Link
        </Button>
      </Link>
        <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
                position: "top-right",
                variant: 'subtle'
              })
            }
          >
            Show Toast
          </Button>
    </div>
  )
}

export default Home
