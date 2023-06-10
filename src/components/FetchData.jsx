import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=25594978f7f44dbcaf58ea8092441ccf`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=25594978f7f44dbcaf58ea8092441ccf"
      );
      setData(response.data.articles);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 100; // Adjust this value to define when to shift the element

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const capitalizedCat = cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "";

  return (
    <div className="container my-4">
      <h3>
        <u
          className={`container d-flex justify-content-center align-items-center ${
            isScrolled ? "position-fixed top-0  w-100" : ""
          }`}
          style={{
            backgroundColor: "red",
            color: "white",

            width: "100vw", // Adjusted width to cover full display width
          }}
        >
          {capitalizedCat}
        </u>
      </h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {Data
          ? Data.map((items, index) => (
              <div
                key={index}
                className="container my-3 p-3"
                style={{
                  width: "600px",
                  boxShadow: "2px 2px 10px silver",
                  borderRadius: "10px",
                }}
              >
                <h5 className="my-2">{items.title}</h5>
                <div className="img-fluid d-flex justify-content-center align-items-center">
                  <img
                    src={items.urlToImage}
                    alt="image not found!!"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <p className="my-1">{items.content}</p>
                <a href={items.url} target="_blank" rel="noreferrer">
                  View More
                </a>
              </div>
            ))
          : "Loading...."}
      </div>
    </div>
  );
};

export default FetchData;
