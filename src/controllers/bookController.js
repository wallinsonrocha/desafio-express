const books = [];

getBook = (req, res) => {    
    return (books.length > 0) ? res.status(200).send(books): res.status(404).send("Não há nenhum livro aqui!");
}

getBookById = (req, res) => {
    let id = req.params.id;
    const book = books.find((i) => i.id === Number(id));
    return (book != null) ? res.status(200).send(book) : res.status(404).send("Livro não encontrado");
}

createBooks = (req, res) => {
    const book = req.body;
    books.push(book);
    return res.status(201).send("Livro adicionado com Sucesso!");    
}

updateBook = (req, res) => {
    const id = req.params.id;
    let book = findBookIndex(id);    
    books[book] = req.body;
    return res.status(201).send("Livro atualizado!");
}

deleteBook = (req, res) => {
    const id = req.params.id;
    let book = findBookIndex(id);    
    books.splice(book, 1);
    return res.status(200).send("Livro deletado com sucesso!");
}

findBookIndex = (id) => {
    const book = books.findIndex((i)=>i.id === Number(id));
    return book;
}

module.exports = {getBook, getBookById, createBooks, updateBook, deleteBook};