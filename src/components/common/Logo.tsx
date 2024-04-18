import Image from 'next/image'

export default function Logo() {
  return <Image src={'/static/images/tree-512x512.png'} alt="Treefeely 로고" width={48} height={48} />
}
