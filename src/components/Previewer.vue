<template>
    <div class="previewer">
        <textarea
                id="editor"
                :value="markedText"
                disabled
                cols="30"
                rows="10">
        </textarea>
    </div>
</template>

<script>
    import marked from 'marked';

    export default {
        name: "previewer",
        props: ['plaintext'],
        data() {
            return {
            }
        },
        computed: {
            markedText() {
                return marked(this.plaintext);
            }
        }
    }
</script>

<style scoped>
    .previewer {
        width: 100%;
    }

    textarea {
        border-radius: 5px;
        height: 98%;
        width: 97%;
        border: 1px solid #7f8c8d;
        resize: none;
    }
</style>