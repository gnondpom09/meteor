Template.postItem.helpers({
  domain: function() {
    // initialisation de la variable balise a
    var a = document.createElement('a');
    // valeur de l attribut de a qui prends la valeur de l url courant
    a.href = this.url;
    return a.hostname;
  }
});
