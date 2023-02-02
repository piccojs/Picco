app.defineAttribute({
  name:"back",
  match:"*",
  parser(attr){
    this.onclick=e=>history.back()
  }
})