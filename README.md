## Endpoints

### 1. Obter Livros

- **Método:** GET
- **Rota:** `/livros/`
- **Controlador:** `bookController.getBook`
- **Descrição:** Retorna todos os livros disponíveis.

### 2. Obter Livro por ID

- **Método:** GET
- **Rota:** `/livros/:id`
- **Controlador:** `bookController.getBookById`
- **Descrição:** Retorna um livro específico com base no ID fornecido.

### 3. Criar Livro

- **Método:** POST
- **Rota:** `/livros/`
- **Controlador:** `bookController.createBooks`
- **Descrição:** Cria um novo livro com base nos dados fornecidos no corpo da solicitação.

### 4. Atualizar Livro

- **Método:** PUT
- **Rota:** `/livros/:id`
- **Controlador:** `bookController.updateBook`
- **Descrição:** Atualiza as informações de um livro existente com base no ID fornecido.

### 5. Excluir Livro

- **Método:** DELETE
- **Rota:** `/livros/:id`
- **Controlador:** `bookController.deleteBook`
- **Descrição:** Remove um livro específico com base no ID fornecido.

## Formato de Dados

A API aceita e retorna dados no formato JSON.
