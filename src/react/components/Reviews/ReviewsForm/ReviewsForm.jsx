import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReviews } from "../../../../features/reviews/reviewsSlice";
import { Modal } from "../../../popups/Modal/Modal";
import { SectionTitle } from "../../Section/SectionTitle/SectionTitle";
import { Label } from "../../forms/Label/Label";
import { Input } from "../../inputs/Input/Input";
import { Textarea } from "../../forms/Textarea/Textarea";
import { Button } from "../../ui/Button/Button";
import styles from "./ReviewsForm.module.scss";

export const ReviewsForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const [reviewData, setReviewData] = useState({
    name: "",
    city: "",
    country: "",
    rating: 5.5,
    comment: "",
  });

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;

    const parsedValue = type === "range" ? parseFloat(value) : value;

    setReviewData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.entries(reviewData).every(([key, value]) => {
      if (typeof value === "string") return value.trim() !== "";
      if (typeof value === "number") return value >= 1 && value <= 10;
      return Boolean(value);
    });

    if (!isFormValid) return;

    setSubmissionStatus("submitting");
    dispatch(addReviews(reviewData));
    setSubmissionStatus("submit");

    setReviewData({
      name: "",
      city: "",
      country: "",
      rating: 5.5,
      comment: "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal onClose={handleCloseModal}>
      {submissionStatus === "submit" ? (
        <SectionTitle title="Review has been submitted!" />
      ) : (
        <>
          <SectionTitle title="Add Your Review" />
          <p>Please fill out the form below to leave your review.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={reviewData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              type="text"
              name="city"
              placeholder="Your City"
              value={reviewData.city}
              onChange={handleInputChange}
              required
            />
            <Input
              type="text"
              name="country"
              placeholder="Your Country"
              value={reviewData.country}
              onChange={handleInputChange}
              required
            />
            <div className={styles.field}>
              <Label htmlFor="rating" isGray={true}>
                Rating: {reviewData.rating}
              </Label>
              <Input
                id="rating"
                className={styles.rating}
                type="range"
                name="rating"
                min="1"
                max="10"
                step="0.1"
                value={reviewData.rating}
                onChange={handleInputChange}
                required
              />
            </div>
            <Textarea
              name="comment"
              placeholder="Write your comment here..."
              value={reviewData.comment}
              onChange={handleInputChange}
              required
            />
            <Button type="submit" disabled={submissionStatus === "submitting"}>
              {submissionStatus === "submitting"
                ? "Submitting..."
                : "Add Review"}
            </Button>
          </form>
        </>
      )}
    </Modal>
  );
};
