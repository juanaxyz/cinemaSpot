import { useParams } from "react-router-dom";
import icons from "../assets/icons/icon";
import { DetailMovie } from "../api/api";
import { useEffect } from "react";
import { useState } from "react";

const detailMovie = () => {
  const baseImgUrl = import.meta.env.VITE_BASE_IMG;
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await DetailMovie(id);
        setDetail(res);
      } catch (e) {
        console.log({ error: e });
      }
    };

    fetchDetail();
  });

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:relative border">
        <img
          src={`${baseImgUrl}${detail.poster_path}`}
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="m-5 md:w-1/2 ">
        <p className="font-bold text-2xl">{detail.title}</p>
        <p>{detail.overview}</p>
        <div className="star flex items-center mt-3 gap-2">
          <img src={icons.star} alt="" className=" size-5" />
          <p>{detail.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default detailMovie;
