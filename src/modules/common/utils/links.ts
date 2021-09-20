const links = {
  articles: {
    base: '/articles',
    single: (id: string) => `/articles/${id}`,
  },
  website: {
    base: 'company.com.br',
    blog: '/blog',
  },
};

export default links;
