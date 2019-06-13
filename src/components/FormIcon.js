/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

export const FormIcon = ({ iname }) => (
  <Icon
    name={iname}
    type="font-awesome"
    size={24}
    color="black"
    containerStyle={{ marginRight: 20 }}
  />
);
FormIcon.propTypes = {
  iname: PropTypes.string.isRequired,
};
