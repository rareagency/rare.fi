/**
 * Combines article's slug and id while removing the redundant identifier from the slug.
 */
export const combineSlug = (slug: string, id: string | number) => {
  return `${slug.replace(/-\w+$/i, "")}-${id}`;
};

/**
 * Extracts article ID from the custom slug.
 */
export const extractId = (slug: string) => {
  const id = slug.match(/-(\d+)$/);
  if (!id || !id[1]) {
    return null;
  }

  return id[1];
};
