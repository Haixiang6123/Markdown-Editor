<template>
    <div>
        <Editor :plainText="plainText"/>
        <Previewer></Previewer>
    </div>
</template>

<script>
    import Editor from '../components/Editor';
    import Previewer from '../components/Previewer';

    export default {
        name: "home",
        data() {
            return {
                plainText: ''
            }
        },
        components: {
            Editor,
            Previewer,
        }
    }
</script>

<style scoped>

</style>