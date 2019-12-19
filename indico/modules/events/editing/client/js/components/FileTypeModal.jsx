// This file is part of Indico.
// Copyright (C) 2002 - 2019 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import React from 'react';
import PropTypes from 'prop-types';
import {Form as FinalForm} from 'react-final-form';
import {Button, Form, Modal} from 'semantic-ui-react';

import {FinalInput, FinalSubmitButton} from 'indico/react/forms';
import {Translate} from 'indico/react/i18n';

export default function FileTypeModal({onClose}) {
  const handleSubmit = async formData => {
    console.log(formData);
  };

  return (
    <FinalForm onSubmit={handleSubmit} subscription={{submitting: true}}>
      {fprops => (
        <Modal
          onClose={onClose}
          size="tiny"
          closeIcon={!fprops.submitting}
          closeOnDimmerClick={!fprops.submitting}
          open
        >
          <Modal.Header content={Translate.string('Add new file type')} />
          <Modal.Content>
            <Form id="file-type-form" onSubmit={fprops.handleSubmit}>
              <FinalInput name="name" label={Translate.string('Name')} required />
            </Form>
          </Modal.Content>
          <Modal.Actions style={{display: 'flex', justifyContent: 'flex-end'}}>
            <FinalSubmitButton form="file-type-form" label={Translate.string('Submit')} />
            <Button onClick={onClose} disabled={fprops.submitting}>
              <Translate>Cancel</Translate>
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </FinalForm>
  );
}

FileTypeModal.propTypes = {
  onClose: PropTypes.func,
};

FileTypeModal.defaultProps = {
  onClose: null,
};
