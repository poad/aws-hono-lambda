import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';

const apiRoot = process.env.API_ROOT_PATH ?? '/';

const app = new Hono();

app.get(apiRoot, (c) => c.json({
  message: 'Hello Hono!',
}));

export const handler = handle(app);
