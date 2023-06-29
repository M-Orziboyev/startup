
export interface ArticleType {
    createdAt: string,
    excerpt: string,
    id: string,
    image: {
        url: string
    },
    slug: string,
    title: string,
    authors: AuthorType,
    description:{
        raw: {
            children: [];
        }
    }
}
export interface AuthorType {
    name: string,
    avatar: {
        url: string
    }
}