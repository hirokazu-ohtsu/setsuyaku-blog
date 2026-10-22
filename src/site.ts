export const SITE = {
  title: 'かずっちの固定費見直し帳',
  tagline: '毎月の固定費を、無理なく、ちゃんと減らす記録',
  author: 'かずっち',
};

// 下書きも表示したいとき（確認用）は SHOW_DRAFTS=1 で起動する
export const showDrafts = process.env.SHOW_DRAFTS === '1' || import.meta.env.DEV;

export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
