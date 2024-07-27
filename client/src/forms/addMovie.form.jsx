import React from "react";
import { useFormik  } from "formik";
import * as Yup from "yup";
import "./forms.css";
import MultipleSelectCheckmarks from '../form Components/Multiselect'

const gengreOptions = ['Drama','Triller','Horror','Fiction','Biography',"Comedy", "Action"];

const AddMovieForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      thumbail: "",
      bannerImage: "",
      trailerVideo:"",
      rating : "",
      duration:"",
      genre: [],
      releaseDate:"",
      languages :"",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      thumbail: Yup.string().required("Required"),
      bannerImage: Yup.string().required("Required"),
      trailerVideo: Yup.string().required("Required"),
      rating: Yup.string().required("Required"),
      duration: Yup.string().required("Required"),
      genre: Yup.string().required("Required"),
      releaseDate: Yup.string().required("Required"),
      languages: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="p-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex pb-4 gap-3">
          <label htmlFor="title">Title</label>
          <div className="flex flex-col">
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.title}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex pb-4 gap-3">
          <label htmlFor="description">Description</label>
          <div className="flex flex-col">
            <input
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.description}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex pb-4 gap-3 ">
          <label htmlFor="thumbail">Thumbail</label>
          <div className="flex flex-col">
            <input
              id="thumbail"
              name="thumbail"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.thumbail}
            />
            {formik.touched.thumbail && formik.errors.thumbail ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.thumbail}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex pb-4 gap-3 ">
          <label htmlFor="bannerImage">Banner Image</label>
          <div className="flex flex-col">
            <input
              id="bannerImage"
              name="bannerImage"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bannerImage}
            />
            {formik.touched.bannerImage && formik.errors.bannerImage ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.bannerImage}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex pb-4 gap-3 ">
          <label htmlFor="trailerVideo">Trailer Video</label>
          <div className="flex flex-col">
            <input
              id="trailerVideo"
              name="trailerVideo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.trailerVideo}
            />
            {formik.touched.trailerVideo && formik.errors.trailerVideo ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.trailerVideo}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex pb-4 gap-3 ">
          <label htmlFor="rating">Rating</label>
          <div className="flex flex-col">
            <input
              id="rating"
              name="rating"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rating}
            />
            {formik.touched.rating && formik.errors.rating ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.rating}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex pb-4 gap-3 ">
          <label htmlFor="duration">Duration</label>
          <div className="flex flex-col">
            <input
              id="duration"
              name="duration"
              type="Time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.duration}
            />
            {formik.touched.duration && formik.errors.duration ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.duration}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex pb-4 gap-3 ">
          <label htmlFor="genre">Genre</label>
          <div className="flex flex-col">
          <MultipleSelectCheckmarks
                options={gengreOptions}
                name="genre"
                labelName="Genre"
              />
          </div>
        </div>
        
        <div className="flex pb-4 gap-3 ">
          <label htmlFor="releaseDate">Release Date</label>
          <div className="flex flex-col">
            <input
              id="genre"
              name="genre"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.genre}
            />
            {formik.touched.genre && formik.errors.genre ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.genre}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex pb-4 gap-3 ">
          <label htmlFor="languages">Languages</label>
          <div className="flex flex-col">
            <input
              id="genre"
              name="genre"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.genre}
            />
            {formik.touched.genre && formik.errors.genre ? (
              <div className="font-light text-red-600 text-sm">
                {formik.errors.genre}
              </div>
            ) : null}
          </div>
        </div>

        <button
          className="relative rounded bg-red-500 px-2 py-1 text-slate-200 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
