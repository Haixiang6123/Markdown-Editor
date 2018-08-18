<template>
    <div class="home-page">
        <header>
            <h1 class="title">Markdown Editor</h1>
        </header>
        <main class="container">
            <Editor :plaintext.sync="plaintext"/>
            <Previewer :plaintext="plaintext"/>
        </main>
        <footer>
            Footer
        </footer>
    </div>
</template>

<script>
    import Editor from '../components/Editor';
    import Previewer from '../components/Previewer';

    export default {
        name: "home",
        data() {
            return {
                plaintext: '',
            }
        },
        methods: {
            updatePlaintext(plaintext) {
                this.plaintext = plaintext;
            }
        },
        components: {
            Editor,
            Previewer,
        }
    }
</script>

<style scoped>
    .home-page {
        margin: 0 auto;
        width: 80%;
        height: 100vh;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10%;
    }

    main {
        height: 80%;
    }

    footer {
        height: 10%;
    }

    .title {
        text-align: center;
    }

    .container {
        display: flex;
        justify-content: center;
    }
</style>