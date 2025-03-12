// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = BookType[]

const BooksDB = [
    {id: 1, title: 'Book 1'},
    {id: 2, title: 'Title'},
    {id: 3, title: 'Book 3'},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let books = BooksDB
    const term = req.query.term as string
    if (term) {
        books = books.filter((book: BookType) => book.title.toLowerCase().includes(term.toLowerCase()))
    }
    res.status(200).json(books)
}


//type

type BookType = {
    id: number
    title: string
}