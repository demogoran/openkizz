<template>
  <div id="pageContainer" v-html="pageMD"></div>
</template>

<script>
import showdown from 'showdown';

const converter = new showdown.Converter();

export default {
  name: 'MDContainer',
  data() {
    return {
      pageMD: ''
    };
  },

  async created() {
    const md = await fetch(
      `https://raw.githubusercontent.com/demogoran/openkizomba/master/${
        window.location.pathname === '/content/'
          ? 'README.md'
          : window.location.pathname.replace('/content/', '')
      }`
    ).then(x => x.text());

    this.pageMD = converter.makeHtml(
      md.replace(
        /https:\/\/github.com\/demogoran\/openkizomba\/blob\/master/g,
        '/route/'
      )
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
