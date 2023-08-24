// document.querySelector(".notes_title").addEventListener('input', function(e) {
//     console.log(e.target.value)
//     let note = e.target.value
//     document.querySelector(".title_text").innerHTML = note
// })

// document.querySelector(".notes_description").addEventListener('change', function(e) {
//     console.log(e.target.value)
//     let description = e.target.value
//     document.querySelector(".description_text").innerHTML = description
// })

const addNoteButton = document.getElementById("addNote");
const noteTitleInput = document.getElementById("noteTitle");
const noteDescriptionInput = document.getElementById("noteDescription");
const notesContainer = document.getElementById("notesContainer");

addNoteButton.addEventListener("click", function () {
    const title = noteTitleInput.value;
    const description = noteDescriptionInput.value;

    if (title && description) {
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");
        noteCard.classList.add("col-md-6");
        noteCard.innerHTML = `
            <h2>${title}</h2>
            <hr>
            <p>${description}</p>
        `;

        notesContainer.appendChild(noteCard);

        // Clear input fields
        noteTitleInput.value = "";
        noteDescriptionInput.value = "";
    }
});
