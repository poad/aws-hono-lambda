import { Show, createResource } from 'solid-js';
import { A, useParams } from '@solidjs/router';

export default function Test() {
  const { id } = useParams();
  const [data] = createResource<{ message: string }>(() =>
    fetch('/api/').then((resp) => resp.json()),
  );
  return (
    <>
      <h1>{id}</h1>
      <p>
        <Show when={!data.loading && data()}>
          <span>{data()?.message}</span>
        </Show>
      </p>
      <p>
        <A href="/">HOME</A>
      </p>
    </>
  );
}
