<template>
    <div class="editor">
        <textarea
                id="editor"
                :value="plaintext"
                @input="updatePlaintext"
                cols="30"
                rows="10">
        </textarea>
    </div>
</template>

<script>
    export default {
        name: "editor",
        props: ['plaintext'],
        data() {
            return {
            }
        },
        methods: {
            updatePlaintext(event) {
                this.$emit('update:plaintext', event.target.value);
            }
        }
    }
</script>

<style scoped>
    .editor {
        width: 100%;
    }

    textarea {
        padding: 10px;
        border-radius: 5px;
        height: 98%;
        width: 97%;
        box-sizing: border-box;
        resize: none;
        outline: none;
    }

    textarea:focus {
        border: 1px solid #42b983;
        box-shadow: 0 0 10px 1px rgba(66,185,131, 0.4);
    }
</style>