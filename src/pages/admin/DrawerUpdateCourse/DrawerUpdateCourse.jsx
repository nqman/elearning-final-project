import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UploadOutlined } from "@ant-design/icons";
import { Select, message } from "antd";
import "./DrawerUpdateCourse.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../../redux/slices/coursesSlice";
import FormInput from "../../../components/FormInput/FormInput";
import { courseService } from "../../../apis/courseAPI";

const DrawerUpdateCourse = ({ setClose }) => {
  const [img, setImg] = useState("");
  const [maDanhMucKhoaHoc, setMaDanhMucKhoaHoc] = useState("");
  const selectedCourse = useSelector((state) => state.course.selectedCourse);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [isChange, setIsChange] = useState(false);

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
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },
    onSubmit: (values) => {
      courseService
        .updateCourses(values)
        .then((res) => {
          if (isChange) {
            let frm = new FormData();
            frm.append("file", file);
            frm.append("tenKhoaHoc", res.data.tenKhoaHoc);
            courseService
              .uploadCourseImg(frm)
              .then(() => {
                message.success("Cập nhật khóa học thành công!");
                dispatch(getAllCourses());
                setClose();
                formik.resetForm();
                setIsChange(false);
              })
              .catch((err) => {
                err.response.data
                  ? message.error(err.response.data)
                  : message.error("Cập nhật khóa học thất bại!");
                setImg(selectedCourse.hinhAnh);
                setIsChange(false);
                setClose();
              });
          } else {
            message.success("Cập nhật khóa học thành công!");
            dispatch(getAllCourses());
            setClose();
            formik.resetForm();
          }
        })
        .catch((err) => {
          err.response.data
            ? message.error(err.response.data)
            : message.error("Cập nhật khóa học thất bại!");
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
      setIsChange(true);
    }
  };

  useEffect(() => {
    setMaDanhMucKhoaHoc(selectedCourse.danhMucKhoaHoc.maDanhMucKhoahoc);
    formik.setValues({
      maKhoaHoc: selectedCourse.maKhoaHoc,
      biDanh: selectedCourse.biDanh,
      tenKhoaHoc: selectedCourse.tenKhoaHoc,
      moTa: selectedCourse.moTa,
      luotXem: selectedCourse.luotXem,
      danhGia: 0,
      hinhAnh: selectedCourse.hinhAnh,
      maNhom: selectedCourse.maNhom,
      ngayTao: selectedCourse.ngayTao,
      maDanhMucKhoaHoc: selectedCourse.danhMucKhoaHoc?.maDanhMucKhoahoc,
      taiKhoanNguoiTao: selectedCourse.nguoiTao.taiKhoan,
    });
    setImg(selectedCourse.hinhAnh);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCourse]);

  return (
    <form id="admin__course--update" onSubmit={formik.handleSubmit}>
      <p className="mb-5 text-sm text-gray-400">
        Bạn có thể thay đổi các thông tin khóa học ngoại trừ mã khóa học!
      </p>
      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <input
            id="maKhoaHoc"
            type="text"
            value={formik.values.maKhoaHoc}
            className="bg-[#eee] w-full shadow-md rounded-md mb-5 p-3 cursor-not-allowed text-gray-500"
            disabled
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
            value={maDanhMucKhoaHoc}
            style={{ width: "100%" }}
            onChange={(value) => {
              formik.values.maDanhMucKhoaHoc = value;
              setMaDanhMucKhoaHoc(value);
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
            <img
              src={img ? img : formik.values.hinhAnh}
              alt="Course Pic"
              className="object-cover w-full h-56 mt-3"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = formik.values.hinhAnh;
              }}
            />
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
          Cập nhật
        </button>
      </div>
    </form>
  );
};

export default DrawerUpdateCourse;
