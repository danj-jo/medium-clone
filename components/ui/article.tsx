export interface article {
    name: string,
    date: string,
    title: string,
    category: string,
    type: string,
    description: string
}

export interface user{
    username: string,
    email: string,
    about: string,
    stories: article[],
    lists: article[]
}