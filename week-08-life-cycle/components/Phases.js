import { useEffect } from 'react';

export default function Phases({ testProp }) {
  // Empty dependency array, onMount
  useEffect(() => {
    alert('Component mounted ...');
  }, []);

  // Filled dependency array, onMount, onUpdate
  useEffect(() => {
    alert('Component updated ...');
  }, [testProp]);

  // Return function, onMount, onUnMount
  useEffect(() => {
    return () => alert('Component unmounted ...');
  }, []);

  return <div>Life Cycle Phases Component</div>;
}
