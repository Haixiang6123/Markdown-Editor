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
            <a href="https://github.com/Haixiang6123/Markdown-Editor" target="_blank">
                <img class="github-img" src="../assets/img/github.png" alt="Github">
            </a>
            <p>Powered By Haixiang Yan</p>
        </footer>
    </div>
</template>

<script>
    import Editor from '../components/Editor';
    import Previewer from '../components/Previewer';

    import assets from '../assets/js/plaintext';

    export default {
        name: "home",
        data() {
            return {
                plaintext: assets.plaintext,
                isHidden: true,
                toggleEditorState: {
                    checked: 'Show',
                    unchecked: 'Hide'
                }
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
        height: 100vh;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10%;
    }

    main {
        margin: 0 auto;
        width: 80%;
        height: 80%;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
        background: #727f80;
    }

    footer a, p {
        margin: 0 3px;
        color: white;
    }

    .github-img {
        width: 30px;
    }

    .title {
        text-align: center;
    }

    .container {
        display: flex;
        justify-content: center;
    }
</style>