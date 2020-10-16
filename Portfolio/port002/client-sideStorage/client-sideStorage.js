let db;


window.addEventListener('load',()=>{
    let request = window.indexedDB.open('notes_os',1);
    request.onerror = ()=>{
        console.log('Database failed to open');
    };

    request.onsuccess = ()=>{
        console.log('Database opened successfully');
        db = request.result;
        dispalyData();
    };
    request.onupgradeneeded = (e)=>{
        let db = e.target.result;
        let objectStore = db.createObjectStore('notes_os',{keyPath:'id',autoIncrement:true});
        objectStore.createIndex('title','title',{unique:false});
        objectStore.createIndex('text','text',{unique:false});
        console.log('Database setup complete');
    };


    function dispalyData(){
        const noteUlist= document.querySelector('.note-list');
        console.log(noteUlist);
        while(noteUlist.firstChild){
            noteUlist.removeChild(noteUlist.firstChild);
        }
    
        let objectStore = db.transaction('notes_os').objectStore('notes_os');
        objectStore.openCursor().onsuccess = (e)=>{
            let cursor = e.target.result;
                if(cursor){
                const noteList = document.createElement('li');
                const noteHead = document.createElement('h2');
                const noteContext = document.createElement('p');
    
                noteHead.textContent = cursor.value.title;
                noteContext.textContent =cursor.value.text;
                noteList.setAttribute('data-note-id',cursor.value.id);
    
                const deletBtn= document.createElement('button');
                
                deletBtn.textContent = 'Delete';
    
                deletBtn.addEventListener('click',deleteItem);
                cursor.continue();
    
                noteList.appendChild(noteHead);
                noteList.appendChild(noteContext);
                noteUlist.appendChild(noteList);
                noteList.appendChild(deletBtn);

            }else{
                if(!noteUlist.firstChild){
                const noteList = document.createElement('li');
                noteList.textContent = 'No notes stored.';
                noteUlist.appendChild(noteList);

            }
                console.log('Notes all displayed');
            }
            
    
        };
    }
    
    
    function deleteItem(e){
        let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));
        const noteUlist= document.querySelector('.note-list');
        let transaction = db.transaction(['notes_os'],'readwrite');
        let objectStore = transaction.objectStore('notes_os');
        let request = objectStore.delete(noteId);
    
        transaction.oncomplete = ()=>{
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            console.log(`Note ${noteId} is deleted.`);
    
            if(!noteUlist.firstChild){
                const noteList = document.createElement('li');
                noteList.textContent = 'No notes stored.';
                noteUlist.appendChild(noteList);
            }
        };
    }


    function createNote(){
    
        const noteTitle = document.querySelector('.note-title');
        const noteText = document.querySelector('.note-text');
        const createBtn = document.querySelector('#create-note');
    
        createBtn.addEventListener('click',function(e){
            e.preventDefault();
    
            if(!noteTitle.value){
                alert('노트 제목을 입력해주세요.');
                return false;
            }else if(!noteText.value){
                alert('노트 내용을 입력해주세요.');
                return false;
    
            }
    
            let newItem = {title:noteTitle.value,text:noteText.value}
            let transaction = db.transaction(['notes_os'],'readwrite');
            let objectStore = transaction.objectStore('notes_os');
            let request = objectStore.add(newItem);
    
            request.onsucess = ()=>{

                noteTitle.value='';
                noteText.value='';
                
            }
    
            transaction.oncomplete = ()=>{
                console.log('Transaction completed: database modification finished.');
                dispalyData();
                
                noteTitle.value='';
                noteText.value='';
            }
    
            transaction.onerror = ()=>{
                console.log('Transaction not opened due to error');
            }
    
    
    
         
        });
     
    
    }

    createNote();

})
