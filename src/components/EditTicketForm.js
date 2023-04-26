import React from "react";
import PropTypes from "prop-types";


function EditTicketForm(props) {
  const { ticket } = props;
  
  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onTicketEdit({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value,
      id: ticket.id,
      timeOpen: ticket.timeOpen, 
      formattedWaitTime: ticket.formattedWaitTime
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleEditTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Update!</button>
      </form>
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onTicketEdit: PropTypes.func
};

export default EditTicketForm;