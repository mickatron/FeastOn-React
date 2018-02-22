import React from 'react';
import Switch from './Switch/Switch';
import TextArea from './TextArea/TextArea';

import HtmlInput from './HtmlInput/HtmlInput';

function renderHtmlInput({ ...props }) {
  return <HtmlInput {...props} />;
};

const TextInput = (props) => renderHtmlInput({ ...props, type: 'text' });
const NumberInput = (props) => renderHtmlInput({ ...props, type: 'number' });
const EmailInput = (props) => renderHtmlInput({ ...props, type: 'email' });
const PasswordInput = (props) => renderHtmlInput({ ...props, type: 'password' });
const CheckBox = (props) => renderHtmlInput({ ...props, type: 'checkbox' });
const Radio = (props) => renderHtmlInput({ ...props, type: 'radio' });

export {
  Switch,
  TextArea,
  TextInput,
  PasswordInput,
  NumberInput,
  EmailInput,
  CheckBox,
  Radio,  
};