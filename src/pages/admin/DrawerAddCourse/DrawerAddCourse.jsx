import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Select, message } from "antd";
import "./DraweAddCourse.scss";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getAllCourses } from "../../../redux/slices/coursesSlice";
import FormInput from "../../../components/FormInput/FormInput";
import { getLocalData } from "../../../redux/slices/authSlice";
import { courseService } from "../../../apis/courseAPI";

const DrawerAddCourse = ({ setClose }) => {
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "GP09",
      ngayTao: "",
      maDanhMucKhoaHoc: "TuDuy",
      taiKhoanNguoiTao: "",
    },
    onSubmit: (values) => {
      const date = new Date();
      const formatDate = moment(date).format("DD/MM/YYYY");
      const { taiKhoan } = getLocalData("user");
      values = {
        ...values,
        ngayTao: formatDate,
        taiKhoanNguoiTao: taiKhoan,
      };
      courseService
        .addCourses(values)
        .then((res) => {
          let frm = new FormData();
          frm.append("file", file);
          frm.append("tenKhoaHoc", res.data.tenKhoaHoc);
          courseService
            .uploadCourseImg(frm)
            .then(() => {
              message.success("Thêm khóa học mới thành công!");
              dispatch(getAllCourses());
              setClose();
              formik.resetForm();
            })
            .catch(() => {
              message.error("Thêm khóa học thất bại!");
            });
        })
        .catch((err) => {
          err.response.data
            ? message.error(err.response.data)
            : message.error("Thêm khóa học thất bại!");
        });
    },
    validationSchema: yup.object({
      maKhoaHoc: yup.string().required("Trường này không được để trống!"),
      biDanh: yup.string().required("Trường này không được để trống!"),
      tenKhoaHoc: yup.string().required("Trường này không được để trống!"),
      moTa: yup.string().required("Trường này không được để trống!"),
      hinhAnh: yup.string().required("Trường này không được để trống!"),
      maDanhMucKhoaHoc: yup.string().required("Trường này không được để trống!"),
    }),
  });

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      formik.setFieldValue("hinhAnh", e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  return (
    <form id="admin__course--add" onSubmit={formik.handleSubmit}>
      <p className="mb-5 text-sm text-gray-400">
        Vui lòng điền các trường sau để thêm khóa học mới vào hệ thống!
      </p>
      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <FormInput
            id="maKhoaHoc"
            type="text"
            placeholder="Mã Khóa Học"
            formik={formik}
            errors={formik.errors.maKhoaHoc}
            touched={formik.touched.maKhoaHoc}
            value={formik.values.maKhoaHoc}
          />
        </div>
        <div>
          <FormInput
            id="biDanh"
            type="text"
            placeholder="Bí Danh"
            formik={formik}
            errors={formik.errors.biDanh}
            touched={formik.touched.biDanh}
            value={formik.values.biDanh}
          />
        </div>
        <div>
          <FormInput
            id="tenKhoaHoc"
            type="text"
            placeholder="Tên Khóa Học"
            formik={formik}
            errors={formik.errors.tenKhoaHoc}
            touched={formik.touched.tenKhoaHoc}
            value={formik.values.tenKhoaHoc}
          />
        </div>
        <div>
          <Select
            id="maDanhMucKhoaHoc"
            defaultValue={formik.values.maDanhMucKhoaHoc}
            style={{ width: "100%" }}
            onChange={(value) => {
              formik.values.maDanhMucKhoaHoc = value;
            }}
            options={[
              { value: "TuDuy", label: "Tư Duy Lập Trình" },
              { value: "DiDong", label: "Lập Trình Mobile" },
              { value: "Design", label: "Thiết Kế Website" },
              { value: "FrontEnd", label: "Lập Trình Front-end" },
              { value: "BackEnd", label: "Lập Trình Back-end" },
              { value: "FullStack", label: "Lập Trình Fullstack" },
            ]}
            className="mb-5 shadow-md"
          />
        </div>
        <div className="col-span-2 mb-5">
          <textarea
            name="moTa"
            id="moTa"
            rows="10"
            placeholder="Mô Tả"
            className={`w-full p-3 outline-none resize-none bg-[#eee] rounded-md shadow-md border-b-[3px] duration-500 border-[#eee] ${
              formik.errors.moTa && formik.touched.moTa
                ? "focus:border-red-500"
                : "focus:border-main"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.moTa}
          ></textarea>
          {formik.errors.moTa && formik.touched.moTa ? (
            <p className="mt-2 text-xs italic text-left text-red-500 sm:text-sm">
              * {formik.errors.moTa}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="col-span-2">
          <input
            id="hinhAnh"
            type="file"
            name="hinhAnh"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleChangeFile}
            style={{ display: "none" }}
          />
          <label
            htmlFor="hinhAnh"
            className="flex items-center justify-center w-full p-2 duration-500 border rounded-lg cursor-pointer hover:border-main hover:text-main bg-[#eee] group shadow-md"
          >
            <UploadOutlined className="text-gray-400 duration-300 group-hover:text-main" />
            <span className="ml-2 text-gray-400 duration-300 group-hover:text-main">
              Click to Upload
            </span>
          </label>
          {formik.errors.hinhAnh && formik.touched.hinhAnh ? (
            <p className="mt-2 text-xs italic text-left text-red-500 sm:text-sm">
              * {formik.errors.hinhAnh}
            </p>
          ) : (
            ""
          )}
          {formik.values.hinhAnh ? (
            <img src={img} alt="Course Pic" className="object-cover w-full h-56 mt-3" />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="mt-5">
        <button
          type="submit"
          className="w-full px-10 py-3 text-sm font-semibold text-white uppercase duration-300 bg-orange-400 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-90"
        >
          Tạo
        </button>
      </div>
    </form>
  );
};

export default DrawerAddCourse;
