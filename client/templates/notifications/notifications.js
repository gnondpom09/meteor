/**
 * envoie de notifications
 */

 // notifications
 Template.notifications.helpers({
   notifications: function() {
     return Notifications.find({
       userId: Meteor.userId(),
       read: false
     }); // fermeture notifications
   },
   notificationCount: function() {
     return Notifications.find({
       userId: Meteor.userId(),
       read: false
     }).count();
   }
 }); // fermeture helpers

// detail notification
 Template.notificationItem.helpers({
   notificationPostPath: function() {
     return Router.routes.postPage.path({
       _id: this.postId
     });
   }
 }); // fermeture helpers

 // evenements notifications
 Template.notificationItem.events({
   'click a': function() {
     Notifications.update(this._id, {
       $set: {
         read: true
       }
     });
   }
 }); // fermeture events
