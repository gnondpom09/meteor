import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// on souscrit a la publications des posts de la collection pour les afficher cote client
Meteor.subscribe('posts');
