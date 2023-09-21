import { HTMLAttributes } from 'react'

type ExampleProps = HTMLAttributes<HTMLDivElement>

export default function Example({ ...props }: ExampleProps) {
  return (
    <div className="" {...props}>
      Example
    </div>
  )
}
