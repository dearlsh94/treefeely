import FlexView from '@/components/common/FlexView'
import Text from '@/components/common/Text'
import { css } from '@emotion/react'
import { fontSizes } from '@/components/common/constants'
import IconGithub from '@/components/icons/IconGithub'
import IconMail from '@/components/icons/IconMail'
import IconKakao from '@/components/icons/IconKakao'
import Linker from '@/components/common/Linker'
import AOSFullGlassCardLayout from '@/components/layouts/AOSFullGlassCardLayout'

export default function Contact() {
  const socials = [
    {
      icon: <IconGithub />,
      name: 'Github',
      link: 'https://github.com/dearlsh94',
    },
    {
      icon: <IconMail />,
      name: 'Mail',
      link: 'mailto:dearlsh94@gmail.com',
    },
    {
      icon: <IconKakao />,
      name: 'Kakao',
      link: 'https://open.kakao.com/me/treefeely',
    },
  ]

  return (
    <AOSFullGlassCardLayout>
      <FlexView colGap={36} rowGap={24} wrap>
        {socials.map(s => (
          <Linker
            key={s.link}
            url={s.link}
            isBlank={true}
            aria-label={`${s.name} 이동`}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              text-decoration: none;
              row-gap: 4px;
              @media (hover: hover) {
                &:hover {
                  transform: translateY(-5px);
                }
              }
            `}
          >
            {s.icon}
            <Text textAlign="center" fontSize={fontSizes.small} color={'var(--color-mono)'} noDrag>
              {s.name}
            </Text>
          </Linker>
        ))}
      </FlexView>
    </AOSFullGlassCardLayout>
  )
}
