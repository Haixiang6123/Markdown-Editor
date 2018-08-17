<template>
    <div>
        <label for="previewer">Previewer</label>
        <textarea v-model="renderedText" id="previewer" cols="30" rows="10"></textarea>
        <p>{{ renderedText }}</p>
    </div>
</template>

<script>
    export default {
        name: "previewer",
        data() {
            return {
                renderedText: '',
            }
        },
    }
</script>

<style scoped>

</style>