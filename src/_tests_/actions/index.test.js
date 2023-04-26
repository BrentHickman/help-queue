import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';


describe("Help Queue actions", () => {
  it("delete should create DELETE_TICKET action", () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: c.DELETE_TICKET,
      id: 1
    });
  });

  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it("addTicket should create ADD_TICKET acrion", () => {
    expect(actions.addTicket({
      names: "Sam and Pepper",
      location: "Front Yard",
      issue: "Ball stuck",
      id: 1
    })).toEqual({
      type: c.ADD_TICKET,
      names: "Sam and Pepper",
      location: "Front Yard",
      issue: "Ball stuck",
      id: 1
    });
  });
});