import FlexView from '@/components/common/FlexView'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import { css } from '@emotion/react'
import { fontSizes } from '@/components/common/constants'

export default function CallModule() {
  const socials = () => {
    const githubIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
        />
      </svg>
    )

    const mailIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
          <path d="m3 7l9 6l9-6" />
        </g>
      </svg>
    )

    const instagramIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
        />
      </svg>
    )

    const kakaoIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 3c5.8 0 10.501 3.664 10.501 8.185c0 4.52-4.701 8.184-10.5 8.184a13.51 13.51 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866c0-4.52 4.7-8.185 10.5-8.185Zm5.908 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.472.472 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413l1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155Zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944Zm-5.857-1.091l.696-1.708l.638 1.707H9.093Zm2.523.487l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474a.696.696 0 0 0-.653.447l-1.662 4.075a.472.472 0 0 0 .874.357l.332-.813h2.07l.298.8a.472.472 0 1 0 .884-.33l-.345-.926ZM8.294 9.302a.472.472 0 0 0-.471-.472H4.578a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14a.472.472 0 0 0 .472-.472Z"
        />
      </svg>
    )

    return [
      {
        icon: githubIcon,
        name: 'Github',
        link: 'https://github.com/dearlsh94',
      },
      {
        icon: mailIcon,
        name: 'Mail',
        link: 'mailto:weezip.ethan@gmail.com',
      },
      {
        icon: instagramIcon,
        name: 'Instagram',
        link: 'https://www.instagram.com/treefeely',
      },
      {
        icon: kakaoIcon,
        name: 'Kakao',
        link: 'https://open.kakao.com/me/treefeely',
      },
    ]
  }

  return (
    <FlexView direction="column" center>
      <Head2Layout text={'대화를 좋아해요.'} />
      <div
        data-aos={'fade-down'}
        css={css`
          width: 90vw;
          max-width: 1024px;
          clear: both;
          min-height: 120px;
          background: #fff;
          border-radius: 8px;
          margin: 4vh 0;
          padding: 16px 12px;
          display: flex;
          flex-direction: row;
          column-gap: 2rem;
          row-gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.65);
          -webkit-box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.65);
          -moz-box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.65);
        `}
      >
        {socials().map(s => (
          <a
            href={s.link}
            target="_blank"
            aria-label={`${s.name} 이동`}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              text-decoration: none;
              row-gap: 4px;
            `}
          >
            {s.icon}
            <Text textAlign="center" fontSize={fontSizes.small} color={'#9e9e9e'}>
              {s.name}
            </Text>
          </a>
        ))}
      </div>
    </FlexView>
  )
}
