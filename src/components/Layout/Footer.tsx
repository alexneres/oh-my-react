import { HTMLAttributes } from 'react'

type FooterProps = HTMLAttributes<HTMLDivElement>

export default function Footer({ ...props }: FooterProps) {
  return (
    <div className="" {...props}>
      Footer
    </div>
  )
}
