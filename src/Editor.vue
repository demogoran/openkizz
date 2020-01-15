<template>
  <div id="test">
    <textarea ref="mdeEditor" />
    <div id="saveButton" @click="saveEditor">Save</div>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde';

export default {
  name: 'editor',
  components: {},
  data() {
    return {
      editor: null
    };
  },
  methods: {
    saveEditor() {
      // eslint-disable-next-line no-console
      console.log(this.editor.value());
    }
  },
  mounted() {
    this.editor = new SimpleMDE({
      element: this.$refs.mdeEditor
    });
  }
};
</script>

<style></style>
