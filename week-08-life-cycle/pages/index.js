import { useState } from 'react';
import Phases from '@/components/Phases';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [update, setUpdate] = useState(false);

  return (
    <div>
      {isMounted && (
        <div>
          <Phases testProp={update} />
          <button
            onClick={() => {
              setUpdate(!update);
            }}
          >
            Update
          </button>
          <br />
          <button
            onClick={() => {
              setIsMounted(false);
            }}
          >
            Unmount
          </button>
        </div>
      )}
      {!isMounted && (
        <button
          onClick={() => {
            setIsMounted(true);
          }}
        >
          Mount Phases
        </button>
      )}
    </div>
  );
}
