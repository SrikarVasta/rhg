<template>
  <div class="goodbye">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'goodbye',
  data () {
    return {
      msg: 'See ya later space cowboy'
    }
  },
  created () {
		axios.get(`http://jsonplaceholder.typicode.com/posts`)
		.then(response => {
			// JSON responses are automatically parsed.
			console.log(response);
			this.msg = response.data[0].title;
		})
		.catch(e => {
			this.errors.push(e);
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
