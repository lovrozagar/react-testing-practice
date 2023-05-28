type ChildProps = {
  text: string
}

function Child({ text }: ChildProps) {
  return <div>{text}</div>
}

export default Child
