import { renderToString } from 'vue/server-renderer';
import { createSSRApp } from 'vue';

import { createRoute } from './routes';
import { createMemoryHistory } from 'vue-router';
import Main from './main.vue';

export default async function render(url: string) {
  const app = createSSRApp(Main);

  const route = createRoute(createMemoryHistory());
  route.push(url);
  await route.isReady();

  app.use(route);

  return renderToString(app);
}
