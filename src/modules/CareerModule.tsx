import Allstay from '@/components/Career/Allstay'
import Baropharm from '@/components/Career/Baropharm'
import Bizntech from '@/components/Career/Bizntech'
import Viascope from '@/components/Career/Viascope'
import FlexView from '@/components/common/FlexView'
import AOSFullCardLayout from '@/components/layouts/AOSFullCardLayout'
import Head2Layout from '@/components/layouts/Head2Layout'

export default function CareerModule() {
  return (
    <FlexView direction="column">
      <Head2Layout text={'저는 회사에서 이런 일들을 했어요.'} />
      <AOSFullCardLayout type="fade-right" align="flex-start" mt={8}>
        <Baropharm />
      </AOSFullCardLayout>
      <AOSFullCardLayout type="fade-right" align="flex-start" mt={8}>
        <Allstay />
      </AOSFullCardLayout>
      <AOSFullCardLayout type="fade-right" align="flex-start" mt={8}>
        <Bizntech />
      </AOSFullCardLayout>
      <AOSFullCardLayout type="fade-right" align="flex-start" mt={8}>
        <Viascope />
      </AOSFullCardLayout>
    </FlexView>
  )
}
