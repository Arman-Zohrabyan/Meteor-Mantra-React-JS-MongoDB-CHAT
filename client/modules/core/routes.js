import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';

import JoinToChat from './containers/joinToChat';

export default function (inject, context, actions) {
  const { FlowRouter } = context;
  const MainLayoutCtx = inject(MainLayout);

  FlowRouter.route('/', {
    name: 'chat.home',
    action() {
      FlowRouter.redirect('/log-in');
      /*mount(MainLayoutCtx, {
        content: () => (<LogIn />),
        context: () => context
      });*/
    }
  });

  FlowRouter.route('/log-in', {
    name: 'chat.logIn',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<JoinToChat  form="LogInForm"/>),
        context: () => context
      });
    }
  });

  FlowRouter.route('/sign-up', {
    name: 'chat.registration',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<JoinToChat  form="RegistrationForm"/>),
        context: () => context
      });
    }
  });
}
