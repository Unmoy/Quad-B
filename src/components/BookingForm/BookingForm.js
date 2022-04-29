import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./BookingForm.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const BookingForm = ({ closeModal, modalIsOpen, name, runtime }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.movieTitle = name;
    data.booked = new Date();
    localStorage.setItem("bookingDetails", JSON.stringify(data));
    alert("Tickets Booked Succesfully");
    closeModal();
  };
  return (
    <div className="booking_modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="movie_info">
          <p>Movie Name: {name}</p>
          <p>Movie Runtime: {runtime} minutes</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="booking_input">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="booking_input">
            <input
              {...register("persons", { required: true })}
              className="form-control"
              placeholder="Number Of Person"
              type="number"
            />
            {errors.persons && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group d-flex justify-content-center ">
            <button className="booking_btn" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BookingForm;
