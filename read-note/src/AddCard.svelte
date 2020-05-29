<script>
    import {cards} from './store';
    import Cookies from 'js-cookie';
    import {saveAs} from 'file-saver';
    import {getNowDateFormat} from "./utils";

    let title = '';
    let content = '';

    function doAdd() {
        if (!title || !content) {
            alert('标题和内容必须都填！');
            return;
        }
        cards.update(item => {
            item = [...item, {
                title,
                content,
                creationTime: getNowDateFormat()
            }];
            Cookies.set('cards', JSON.stringify(item));
            return item;
        })
    }

    function doExport() {
        const texts = [];
        for (const card of $cards) {
            let text = `### ${card.title}\n${card.content}\n${card.creationTime}\n`;
            texts.push(text);
        }
        const blob = new Blob(texts, {type: "text/plain;charset=utf-8"});
        saveAs(blob, "read_note.md");
    }
</script>

<div class="add-card">
    <div class="input-wrapper">
        <input class="input-title" type="text" placeholder="输入标题" bind:value={title} />
        <textarea class="input-content" placeholder="输入内容" bind:value={content}></textarea>
    </div>
    <button class="add-btn" on:click={doAdd}>添加</button>
    <button class="export-btn" on:click={doExport}>导出</button>
</div>

<style>
    .add-card {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        background-image: linear-gradient(135deg, #FEC163 10%, #DE4313 100%);
        display: flex;
    }

    .add-card * {
        border: none;
        border-radius: 5px;
    }

    .input-wrapper {
        flex: 4;
    }

    .input-title {
        width: 100%;
    }

    .input-content {
        width: 100%;
        resize: none;
    }

    .add-btn, .export-btn {
        flex: 1;
        margin-left: 1rem;
        color: #666;
    }
</style>