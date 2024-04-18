import { css } from '@emotion/react'
import Logo from '@/components/common/Logo'
import { FlexView } from '../common'
import useTheme from '@/hooks/useTheme'
import { Themes } from '@/constants'
import IconLight from '@/components/icons/IconLight'
import IconDark from '@/components/icons/IconDark'

export default function Header() {
  const { theme, changeAndSaveTheme } = useTheme()

  const handleChangeTheme = () => {
    changeAndSaveTheme(theme === Themes.DARK ? Themes.LIGHT : Themes.DARK)
  }
  return (
    <FlexView
      width={'fill'}
      align="between-center"
      css={css`
        padding: 8px 24px;
        border-bottom: 12px solid #000;
      `}
    >
      <Logo />
      <button
        aria-hidden={true}
        onClick={handleChangeTheme}
        css={css`
          width: 48px;
          height: 48px;
        `}
      >
        {theme === Themes.LIGHT ? <IconDark /> : <IconLight />}
      </button>
    </FlexView>
  )
}
