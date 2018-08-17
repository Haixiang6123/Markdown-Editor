<template>
    <div>
        <label for="editor">Editor</label>
        <textarea v-model="plainText" id="editor" cols="30" rows="10"></textarea>
        <p>{{ markedText }}</p>
    </div>
</template>

<script>
    import marked from 'marked';

    export default {
        name: "editor",
        data() {
            return {
                plainText: ''
            }
        },
        computed: {
            markedText() {
                return marked(this.plainText);
            }
        }
    }
</script>

<style scoped>

</style>