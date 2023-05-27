type GreetProps = {
  name?: string
}

function Greet({ name }: GreetProps) {
  return <div>{name ? `Hello ${name}` : 'Hello'}</div>
}

export default Greet
