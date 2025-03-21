import React, { useEffect, useState } from "react";
import axios from "axios";

const Recommendations = () => {
  const [cakes, setCakes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const token = localStorage.getItem("token"); // Replace with actual storage key

        const res = await axios.get("http://localhost:5000/api/v1/recommendations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCakes(res.data.recommendedCakes);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("Could not load recommendations.");
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="recommendation-section" style={{ padding: "20px" }}>
      <h2>Recommended for You 🍰</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {cakes.length === 0 && !error && <p>No recommendations at the moment.</p>}

      <div className="recommendations" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {cakes.map((cake) => (
          <div key={cake._id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <h4>{cake.name}</h4>
            <img
              src={cake.image}
              alt={cake.name}
              style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
