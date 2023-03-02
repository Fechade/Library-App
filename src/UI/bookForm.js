export default function bookForm() {
    const newForm = document.createElement('div');
    newForm.innerHTML = `
        <form class="info">
            <input required class="title" type="text" placeholder="Title">
            <input class="author" type="text" placeholder="Author">
            <input class="pages" type="number" placeholder="Pages">
            <button class="read">Read</button>
            <input class="submit" type="button" value="Add">
        </form>
        <button class="addBook">Add Book</button>
    `

    return newForm;
}