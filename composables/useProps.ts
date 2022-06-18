export const useProps = () => {
  const mapPageUrl = (pageId: string) => {
    return `/blog/${pageId}`;
  };

  const pageLinkOptions = computed(() => ({
    component: defineNuxtLink({}),
    href: 'to',
  }));

  return {
    mapPageUrl,
    pageLinkOptions,
  };
};
