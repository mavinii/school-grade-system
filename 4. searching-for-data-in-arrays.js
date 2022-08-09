const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O Homem mais rico da babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Roberto T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce e Insubstitutivel",
                author: "Augusto Cury",                
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "Augusto Cury",                
            },
            {
                title: "7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",                
            },
        ],
    },
];

// 1. Count the number of categories and the number of books in that category:
const totalCategories = booksByCategory.length
console.log(`Total categories: ${totalCategories}`)

for (let category of booksByCategory) {
    console.log("Categories:",category.category, ". Total:",category.books.length);
}

// 2. Count the number of Authors:
function countAuthors() {
    let authors = [] //array empty is going to recieve all authors

    // this FOR is getting the category 
    for (let category of booksByCategory) {

        // this FOR is getting the books of each category 
        for (let books of category.books) {

            // -1 represents empty author, add author to the array "authors", if finds it empty
            if(authors.indexOf(books.author) == -1){
                authors.push(books.author)
            }            
        }
    }

    console.log("Total of Authors:",authors.length)
}

countAuthors()

// 3. Showing books by author name "Auguto Cury" and
// 4. Transform the function above into a function that can be recieve the author name and return the author book back.
// This is basically the same ideia of the question 2:
function countByAuthorsName(author) {
    let books = [] 

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }            
        }
    }
    console.log(`Books of ${author}: ${books.join(", ")}.`)
}
countByAuthorsName("Augusto Cury")