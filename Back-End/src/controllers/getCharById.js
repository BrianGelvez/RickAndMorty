const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(`${URL}${id}`);
    const { data } = response;

    if (!data.error) {
      const { id, status, name, species, origin, image, gender } = data;
      res.status(200).json({ id, status, name, species, origin, image, gender });
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;






// const axios = require('axios');

// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
//   const { id } = req.params;

//   axios.get(`${URL}${id}`)
//     .then(response => {
//       const { data } = response;

//       if (!data.error) {
//         const { id, status, name, species, origin, image, gender } = data;
//         res.status(200).json({ id, status, name, species, origin, image, gender });
//       } else {
//         res.status(404).json({ message: "Not found" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: error.message });
//     });
// };

// module.exports = getCharById;