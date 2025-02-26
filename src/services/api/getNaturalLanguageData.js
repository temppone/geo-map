import axios from "axios";

export const getNaturalLanguageData = async (dataToSearch, question) => {
  console.log("Enviando:", { dataToSearch, question }); // 🔍 Debug

  const { data } = await axios.post("http://localhost:3000/api", {
    dataToSearch,
    question,
  });

  if (!data) {
    throw new Error("Failed to get population");
  }

  return data;
};
