import type { ReactNode } from "react"

interface UserShape {
  children: ReactNode;
}

const Chieldren = ({children}: UserShape) => {
  return (
    <div>{children}</div>
  )
}
export default Chieldren