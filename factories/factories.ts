import Post from "@/components/ui/post";

export const postFactory = (content: string, description: string, notes=0 ): typeof post => {
    const post = {
        content: content,
        description: description,
        notes: notes
    }
    return post
}