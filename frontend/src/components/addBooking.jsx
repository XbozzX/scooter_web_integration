import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

const addBooking = ({ isOpen, onClose, onEventAdded }) => {
  //   Setup Modal
  //   const [isOpen, setisOpen] = React.useState(false);
  //   const [onClose, setOnClose] = React.useState(false);
  //   const [onEventAdded, setOnEventAddedonClose] = React.useState(false);
  // Setup event
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  console.log(start);
  console.log(end);

  const onSubmit = (event) => {
    event.preventDefault;

    onEventAdded({
      title,
      start,
      end,
    });

    onClose();
  };
  //console.log(title);
  // console.log(start);
  //console.log(end);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Customer Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label> Start Date </label>
          <Datetime value={start} onChange={(date) => setStart(date)} />
        </div>

        <div>
          <label> End Date</label>
          <Datetime value={end} onChange={(date) => setEnd(date)} />
        </div>
        <button className=" p-7 border bg-amber-200"> Add booking</button>
      </form>
    </Modal>
  );
};

export default addBooking;
