import Head2 from '../common/Head2'
import AOSFullLayout from './AOSFullLayout'

interface Head2LayoutProps {
  text: string
}
export default function Head2Layout({ text }: Head2LayoutProps) {
  return (
    <AOSFullLayout>
      <Head2 color={'#fff'}>{text}</Head2>
    </AOSFullLayout>
  )
}
