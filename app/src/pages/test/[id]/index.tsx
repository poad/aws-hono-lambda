import { useParams } from '@solidjs/router';
import { Loading, createMemo } from 'solid-js';

export default function Test() {
  const { id } = useParams();
  const data = createMemo<{ message: string }>(() =>
    fetch('/api/').then((resp) => resp.json()),
  );
  return (
    <>
      <h1>{id}</h1>
      <p>
        <Loading on={data} fallback={<p>Loading...</p>}>
          <span>{data()?.message}</span>
        </Loading>
      </p>
      <p>
        <a href="/">HOME</a>
      </p>
    </>
  );
}
