import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gist.githubusercontent.com/alietebarian/a4299fc4c60a5ff983d4ce24af935885/raw/3c1526fa03d2a5dc1684c127f4520e73965d376a/data.json/${id}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Item {id}</h2>
      <p>Date: {item.date}</p>
      <p>Title: {item.title}</p>
      <p>Status: {item.status}</p>
      <p>Name: {item.name}</p>
      <p>Number: {item.number}</p>
    </div>
  );
};

export default Edit;
