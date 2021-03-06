import React from 'react';
import { SocialAuth } from './SocialAuth';
import { SignUpForm } from './SignUpForm';
import { FormattedMessage } from 'react-intl';

import '../styles/authorizationSignUp.css';
import '../styles/authorizationSignUpMedia.css';

import { SignUpProps } from '../models/authorizationSignUp';

export const AuthorizationSignUp: React.FC<SignUpProps> = (
  props: SignUpProps,
) => {
  const resetSignUpWidth = props.isAuthorizitationVisible
    ? 'reset_sign-up-width'
    : '';
  return (
    <div className={`sign-up ${resetSignUpWidth}`}>
      <div className="sign-up__wrapper">
        <div className="sign-up__title">
          <FormattedMessage id="authorization.signUp" />
        </div>
        <SocialAuth />
        <SignUpForm />
      </div>
    </div>
  );
};
