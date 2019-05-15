<script>
const components = {
  user: () => import('../LevelUser'),
  admin: () => import('../LevelAdmin'),
  guest: () => import('../LevelGuest')
}

export default {
  render (h) {
    return h(components[this.auth])
  },
  props: {
    auth: {
      type: String,
      required: true
    }
  }
}
</script>
