export default function Greeting(props) {
  const displayName = props.name ?? 'Jane Doe';
  return <p>Hello {displayName}, how are you?</p>;

  // A more concise version of the above
  //return <p>Hello {props.name ?? 'Jane Doe'}, how are you?</p>;
}
