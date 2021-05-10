const editor = new EditorJS({
    tools: {
        class: Header,
    }
});

saveBtn = document.getElementById('saveArticle')

async function handleForm() {
    const editorData = await editor.save().then((outputData) => {
        return outputData;
    });
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            editorData
        })
    }
    try {
        await fetch('/dashboard/createstoryarc', options);
    } catch (err) {
        console.log(err);
    }
}

saveBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    handleForm();
})