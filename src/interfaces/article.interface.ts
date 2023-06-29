
export interface ArticleType {
    createdAt: string,
    excerpt: string,
    id: string,
    image: {
        url: string
    },
    slug: string,
    title: string,
    author: AuthorType,
    description:{
        text: string;
        raw: {
            children: [];
        }
    },
    language:string
}
export interface AuthorType {
    name: string,
    avatar: {
        url: string
    }
}