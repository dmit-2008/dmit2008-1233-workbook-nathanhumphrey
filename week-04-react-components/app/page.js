import Hello from './components/Hello';
import Greeting from './components/Greeting';
import ComponentWrapper from './components/ComponentWrapper';
import FriendList from './components/FriendList';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ComponentWrapper>
        <Hello />
        <Greeting />
      </ComponentWrapper>
      <h2>Friends</h2>
      <FriendList />
    </main>
  );
}
