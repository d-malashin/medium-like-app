<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ data.title }}
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Clap</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>


<script>


export default {
  props: {
    data: {
      title: String,
      required: true
    },
    id: Number
  },
  created() {
    console.log(this)
  }
};
</script>  