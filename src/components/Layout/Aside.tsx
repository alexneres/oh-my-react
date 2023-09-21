import { HTMLAttributes } from 'react'

type AsideProps = HTMLAttributes<HTMLDivElement>

export default function Aside({ ...props }: AsideProps) {
  return (
    <div className="" {...props}>
      Aside
    </div>
  )
}
