<script>
    import {cards} from "./store";
    import Cookies from "js-cookie";

    export let title;
    export let content;
    export let creationTime;
    export let index = 0;

    function doDelete() {
        cards.update(item => {
            item.splice(index, 1);
            Cookies.set('cards', JSON.stringify(item));
            return item;
        })
    }
</script>

<div class={`card bg-color-${index % 5}`}>
    <div class="title">
        {title} <span class="del-btn" on:click={doDelete}>x</span>
    </div>
    <div class="content">{content}</div>
    <div class="creationTime">{creationTime}</div>
</div>

<style>
    .card {
        padding: 1rem;
        margin: 1rem;
        color: #fff;
        border-radius: 0.5rem;
    }
    .card .title {
        font-weight: bold;
        font-size: 1.2rem;
    }
    .card .content {
        margin: 0.5rem 0;
    }
    .card .creationTime {
        font-size: 0.8rem;
    }
    .del-btn {
        float: right;
        user-select: none;
        opacity: 0;
        transition-duration: 500ms;
    }
    .card:hover .del-btn {
        opacity: 1;
    }
</style>