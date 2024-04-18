import { css } from '@emotion/react'
import { FlexView, Head2, Text, Badge, Linker } from '../common'
import { BadgeType } from './Badge'
import { fontWeights, fontSizes } from '@/components/common/constants'
import IconLinkOut from '../icons/IconLinkOut'

interface ServiceIntroProps {
  title: string
  description: string
  badges: BadgeType[]
  link: string
}
export default function ServiceIntro({ title, description, badges, link }: ServiceIntroProps) {
  return (
    <Linker
      url={link}
      isBlank
      css={css`
        width: 100%;
      `}
    >
      <FlexView
        width="fill"
        direction="column"
        align="start-start"
        rowGap={36}
        css={css`
          padding: 2rem 1rem;
          @media (hover: hover) {
            &:hover {
              border-radius: 8px;
              outline: 2px solid var(--color-mono);
            }
            &:hover .view-more {
              text-decoration: underline;
            }
          }
        `}
      >
        <FlexView direction="column" rowGap={16} align="start-start" width={'fill'}>
          <Head2 textAlign="left" noDrag>
            {title}
          </Head2>
          <Text textAlign="left" noDrag>
            {description}
          </Text>
        </FlexView>
        <FlexView width="fill" align="between-center" colGap={16} rowGap={8} wrap>
          <FlexView colGap={8}>
            {badges.map(badge => (
              <Badge key={badge} type={badge} />
            ))}
          </FlexView>
          <FlexView colGap={4} flex={1} align="end-center">
            <Text
              className="view-more"
              fontSize={fontSizes.large}
              fontWeight={fontWeights.w700}
              noWrap
              noDrag
              css={css`
                transition: text-decoration 0.3s ease;
              `}
            >
              View More
            </Text>
            <IconLinkOut size={'1.25rem'} />
          </FlexView>
        </FlexView>
      </FlexView>
    </Linker>
  )
}
