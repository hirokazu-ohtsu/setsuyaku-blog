import { defineConfig } from 'astro/config';

// GitHub Actions では GITHUB_REPOSITORY（例: kazucchi/setsuyaku-blog）からURLを組み立てる。
// 独自ドメインを設定したら SITE_URL を設定し、BASE_PATH を "/" にする。
const repo = process.env.GITHUB_REPOSITORY ?? '';
const [owner, name] = repo.split('/');
const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = process.env.BASE_PATH ?? (name ? `/${name}` : '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
});
