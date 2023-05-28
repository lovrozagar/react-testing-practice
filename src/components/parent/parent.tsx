import Child from './child'

type ParentProps = {
  textContent: string[]
}

function Parent({ textContent = ['something'] }: ParentProps) {
  return (
    <>
      <p>Parent</p>
      <ul>
        {textContent.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
      <Child text={textContent[0]} />
    </>
  )
}

export default Parent
