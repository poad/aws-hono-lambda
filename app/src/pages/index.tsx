import { type JSX } from '@solidjs/web/jsx-runtime';
import styles from './index.module.css';

export default function (): JSX.Element {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          <a href="/about">about</a>
        </p>
        <p>
          <a href="/test/hoge">test</a>
        </p>
      </header>
    </div>
  );
}
