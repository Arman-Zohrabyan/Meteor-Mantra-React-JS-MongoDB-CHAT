import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import JoinToChat from './containers/joinToChat';
import OpenRoom from './containers/openRoom';
import ChatRooms from './containers/chatRooms';
import ChatRoom from './containers/chatRoom';

export default function (inject, context, actions) {
  const { FlowRouter, Meteor } = context;
  const MainLayoutCtx = inject(MainLayout);

  FlowRouter.route('/', {
    name: 'chat.home',
    action() {
      Meteor.userId() ?
      FlowRouter.redirect('/rooms') :
      FlowRouter.redirect('/log-in');
    }
  });

  FlowRouter.route('/log-in', {
    name: 'authentication.logIn',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<JoinToChat  form="LogInForm"/>),
        context: () => context
      });
    }
  });

  FlowRouter.route('/sign-up', {
    name: 'authentication.registration',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<JoinToChat  form="RegistrationForm"/>),
        context: () => context
      });
    }
  });

  FlowRouter.route('/open-new-room', {
    name: 'chat.openNewRoom',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<OpenRoom  />),
        context: () => context
      });
    }
  });

  FlowRouter.route('/rooms', {
    name: 'chat.rooms',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ChatRooms  />),
        context: () => context
      });
    }
  });

  FlowRouter.route('/room/:roomId', {
    name: 'chat.room',
    action({roomId}) {
      mount(MainLayoutCtx, {
        content: () => (<ChatRoom roomId={roomId} />),
        context: () => context
      });
    }
  });
}
