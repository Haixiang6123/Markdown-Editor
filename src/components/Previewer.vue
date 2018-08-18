<template>
    <div class="previewer" v-html="markedText"></div>
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
        padding: 10px;
        border-radius: 5px;
        height: 98%;
        width: 97%;
        overflow: auto;
        box-sizing: border-box;
        border: 1px solid #7f8c8d;
    }
</style>