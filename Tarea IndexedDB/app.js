document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById('addNoteBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const notesContainer = document.getElementById('notesContainer');

    let db;
    // Abrir o crear la base de datos
    const request = indexedDB.open('notasDB', 1);

    request.onerror = (event) => {
        console.error('Error al abrir la base de datos:', event.target.error);
    };

    request.onupgradeneeded = (event) => {
        // Crear almacén de objetos 'notas'
        db = event.target.result;
        const notesStore = db.createObjectStore('notas', { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess = (event) => {
        db = event.target.result;

        // Cargar las notas al iniciar la aplicación
        loadNotes();

        addNoteBtn.addEventListener('click', addNote);
        deleteAllBtn.addEventListener('click', deleteAllNotes);
    };

    function addNote() {
        const noteText = prompt('Ingrese el texto de la nota:');
        if (noteText) {
            const transaction = db.transaction(['notas'], 'readwrite');
            const notesStore = transaction.objectStore('notas');

            const newNote = { text: noteText };
            const request = notesStore.add(newNote);

            request.onsuccess = () => {
                loadNotes();
            };

            request.onerror = (event) => {
                console.error('Error al agregar la nota:', event.target.error);
            };
        }
    }

    function deleteAllNotes() {
        const confirmDelete = confirm('¿Estás seguro de eliminar todas las notas?');
        if (confirmDelete) {
            const transaction = db.transaction(['notas'], 'readwrite');
            const notesStore = transaction.objectStore('notas');

            const request = notesStore.clear();

            request.onsuccess = () => {
                loadNotes();
            };

            request.onerror = (event) => {
                console.error('Error al eliminar todas las notas:', event.target.error);
            };
        }
    }

    function loadNotes() {
        // Limpiar el contenedor de notas
        notesContainer.innerHTML = '';

        const transaction = db.transaction(['notas'], 'readonly');
        const notesStore = transaction.objectStore('notas');

        const request = notesStore.openCursor();

        request.onsuccess = (event) => {
            const cursor = event.target.result;

            if (cursor) {
                const noteDiv = document.createElement('div');
                noteDiv.classList.add('note');
                noteDiv.innerHTML = `
                    <p>${cursor.value.text}</p>
                    <span class="deleteNoteBtn" data-id="${cursor.value.id}">&#10006;</span>
                `;
                noteDiv.querySelector('.deleteNoteBtn').addEventListener('click', deleteNote);

                notesContainer.appendChild(noteDiv);

                cursor.continue();
            }
        };
    }

    function deleteNote(event) {
        const noteId = Number(event.target.dataset.id);

        const transaction = db.transaction(['notas'], 'readwrite');
        const notesStore = transaction.objectStore('notas');

        const request = notesStore.delete(noteId);

        request.onsuccess = () => {
            // Eliminar la nota del DOM sin depender del ID
            const deletedNote = event.target.closest('.note');
            if (deletedNote) {
                deletedNote.remove();
            }

            loadNotes();
        };

        request.onerror = (event) => {
            console.error('Error al eliminar la nota:', event.target.error);
        };
    }
});