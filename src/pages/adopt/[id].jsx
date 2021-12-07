import React, { useState } from "react";
import { getCats, getCat } from "../../../server/mongodb/actions/Adopt";

const CatPage = ({ age, breed, image, isAdopted, location, name, _id }) => {
  const [adopterName, setAdopterName] = useState("");
  const [adopterEmail, setAdopterEmail] = useState("");
  const [adopterLocation, setAdopterLocation] = useState("");
  const [adopterPhone, setAdopterPhone] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={image} style={{ width: "40%" }} />
        <div style={{ width: "40%" }}>
          <h1>{name}</h1>
          <p>Age: {age}</p>
          <p>Location: {location}</p>
        </div>
      </div>
      <div style={{ width: "500px", margin: "20px" }}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const application = {
              name: adopterName,
              location: adopterLocation,
              email: adopterEmail,
              phone: adopterPhone,
              cat: _id,
              isApproved: true,
            };

            // await submit(application);
            const res = await fetch("/api/submitform", {
              method: "POST",
              body: JSON.stringify(application),
            });

            setAdopterName("");
            setAdopterEmail("");
            setAdopterLocation("");
            setAdopterPhone("");
          }}
        >
          <div style={{ width: "100%", margin: "10px" }}>
            <label>
              Name:
              <input
                type="text"
                value={adopterName}
                onChange={(e) => setAdopterName(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ width: "100%", margin: "10px" }}>
            <label>
              Email:
              <input
                type="text"
                value={adopterEmail}
                onChange={(e) => setAdopterEmail(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ width: "100%", margin: "10px" }}>
            <label>
              Location:
              <input
                type="text"
                value={adopterLocation}
                onChange={(e) => setAdopterLocation(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ width: "100%", margin: "10px" }}>
            <label>
              Phone #:
              <input
                type="text"
                value={adopterPhone}
                onChange={(e) => setAdopterPhone(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ width: "100%", margin: "10px" }}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const cat = await getCat(id);
  return {
    props: cat,
  };
}

export async function getStaticPaths() {
  const data = await getCats();
  return {
    paths: data.map(({ _id }) => ({
      params: { id: _id },
    })),
    fallback: false,
  };
}

export default CatPage;
