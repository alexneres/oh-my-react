import { HTMLAttributes } from 'react'

type HeaderProps = HTMLAttributes<HTMLDivElement>

export default function Header({ ...props }: HeaderProps) {
  return (
    <div className="" {...props}>
      Header
    </div>
  )
}
