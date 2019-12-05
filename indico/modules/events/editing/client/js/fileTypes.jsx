// This file is part of Indico.
// Copyright (C) 2002 - 2019 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import React from 'react';
import ReactDOM from 'react-dom';

import FileTypeInterface from './components/FileTypeInterface';

document.addEventListener('DOMContentLoaded', async () => {
  const fileTypeInterface = document.querySelector('#editing-filetypes');
  const eventId = parseInt(fileTypeInterface.dataset.eventId, 10);

  if (!fileTypeInterface) {
    return null;
  }
  ReactDOM.render(<FileTypeInterface eventId={eventId} />, fileTypeInterface);
});
