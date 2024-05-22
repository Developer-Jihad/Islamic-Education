import image from "../../images/not-found.webp";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center">
      <img style={{ width: "70%" }} src={image} alt="" />
    </div>
  );
};

export default NotFound;
