import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import CircleText from '@/components/ui/CircleText'
import LineText from '@/components/ui/LineText'
import Star, { IStar } from '@/components/ui/Star'
import { getRandomInt, isEvenNumber } from '@/utils/common'

interface IHome {}

const Index: NextPage<IHome> = () => {
  const [stars, setStars] = useState<IStar[]>([])

  const createRandomStar = (): IStar => {
    return {
      positionTop: `${getRandomInt(0, 100)}%`,
      positionLeft: `${getRandomInt(0, 100)}%`,
      size: getRandomInt(2, 12),
      color: isEvenNumber(getRandomInt(0, 10)) ? '#f7f3b4' : `#fff`,
      duration: getRandomInt(3, 6),
    }
  }

  useEffect(() => {
    const s = []
    for (let i = 0; i < 50; i++) {
      s.push(createRandomStar())
    }
    setStars(s)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Treefeely</title>
      </Head>
      <main className="home-container">
        <CircleText text="TREEFEELY TREEFEELY TREEFEELY" size={'300px'} />
        <a className="weezip-line" href="https://weezip.treefeely.com" target="_blank" rel="noreferrer">
          <LineText text="WEEZIP" />
        </a>
        {stars.map((star, i) => (
          <Star
            key={`star-${i}`}
            className={`star-${i}`}
            positionTop={star.positionTop}
            positionLeft={star.positionLeft}
            size={star.size}
            color={star.color}
            duration={star.duration}
          />
        ))}
      </main>
    </Fragment>
  )
}

export default Index
