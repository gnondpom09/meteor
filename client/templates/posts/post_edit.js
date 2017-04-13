/**
 * modification des posts
 */
 Template.postEdit.events({
   'submit form': function(e) {
     e.preventDefault();
     // affectations
     var currentPostId = this._id;
     var postProperties = {
       url: $(e.target).find('[name=url]').val(),
       title: $(e.target).find('[name=title]').val()
     };
     Posts.update(currentPostId, {
       $set: postProperties
     }, function(error) {
       if (error) {
         // affiche l erreur utilisateur
         alert(error.reason);
       } else {
         Router.go(postPage, {
           _id: currentPostId
         });
       } // fermeture function error
     }); // femeture update
   }, 'click .delete': function(e) {
     e.preventDefault();
     // confirmation de suppression du post
     if (confirm('supprimer ce post?')) {
       var currentPostId = this._id;
       Posts.remove(currentPostId);
       Router.go('postsList');
     }
   }
 });
