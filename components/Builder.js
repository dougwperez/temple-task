import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import TaskToolbar from './TaskToolbar';
import BuilderToolbar from './BuilderToolbar';

import {
  getMode,
  getColor,
  getIsGridVisible,
  getBrickDimensions,
  getAreUtilsOpen,
  getBricks,
} from 'selectors';
import {
  setMode,
  setColor,
  toggleGrid,
  setBrick,
  toggleUtils,
  addBrick,
  removeBrick,
  updateBrick,
  resetScene,
  setScene,
} from 'actions';

import Scene from './engine/Scene';
