import axios from "axios";

function Detail() {

  const handleUpdate = (id) => {
    const data = {
      name: "Updated Name",
      status: "active",
      score: 90
    };

    axios.put("http://localhost:8080/api/users/" + id, data)
      .then(res => {
        console.log("Updated:", res.data);
        alert("User Updated Successfully");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Detail Page</h2>

      <button onClick={() => handleUpdate("USER_ID_HERE")}>
        Edit
      </button>
    </div>
  );
}

export default Detail;