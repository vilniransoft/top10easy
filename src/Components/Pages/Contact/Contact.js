import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            email: "",
            first: "",
            last: "",
            phone: "",
            comments: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            first: Yup.string()
                .min(2, "Must be at least 2 characters")
                .required("Required"),
            last: Yup.string()
                .min(2, "Must be at least 2 characters")
                .required("Required"),
            phone: Yup.string()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, "Must be at least 10 digits")
                .required("Required"),
            comments: Yup.string()
                .required("Required")
                .matches(/^[a-zA-Z0-9\s]*$/, "No special characters allowed")
        }),
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
    });
    return <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center md:flex-row">
                <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                    <p className="font-medium text-green-500 uppercase">Building Businesses</p>
                    <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                        Changing The Way People Do Business.
                    </h2>
                    <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
                </div>
                <div className="w-full mt-16 md:mt-0 md:w-2/5">
                    <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                        <h3 className="mb-6 text-2xl font-medium text-center">Contact Us</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="email"
                                    className="block w-full px-4 py-3 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
                                    placeholder="Email address"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div style={{ fontSize: "13px" }} className="text-red-500 m-1">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="first"
                                    className="block w-full px-4 py-3 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
                                    placeholder="First Name"
                                    value={formik.values.first}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.first && formik.errors.first ? (
                                    <div style={{ fontSize: "13px" }} className="text-red-500 m-1">{formik.errors.first}</div>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="last"
                                    className="block w-full px-4 py-3 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
                                    placeholder="Last Name"
                                    value={formik.values.last}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.last && formik.errors.last ? (
                                    <div style={{ fontSize: "13px" }} className="text-red-500 m-1">{formik.errors.last}</div>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="phone"
                                    className="block w-full px-4 py-3 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
                                    placeholder="Telephone #"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div style={{ fontSize: "13px" }} className="text-red-500 m-1">{formik.errors.phone}</div>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <textarea
                                    type="text"
                                    name="comments"
                                    className="block w-full px-4 py-3 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
                                    placeholder="Comments"
                                    rows="5"
                                    cols="50"
                                    value={formik.values.comments}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.comments && formik.errors.comments ? (
                                    <div style={{ fontSize: "13px" }} className="text-red-500 m-1">{formik.errors.comments}</div>
                                ) : null}
                            </div>
                            <div className="block">
                                <button
                                    type="submit"
                                    className="w-full px-3 py-4 font-medium text-white bg-green-500 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
}