import React, { createContext, useState } from "react";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const AiContext = createContext();

const AiProvider = ({ children }) => {
  //states
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //functions
  const processRequest = async (prompt, input) => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}:\n\n ${input}`,
        temperature: 0,
        max_tokens: 1300,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      if (response.status === 200) {
        setIsLoading(false);
      }
      const responseCorrect = response?.data?.choices[0]?.text;
      setOutput(responseCorrect);

    } catch (error) {
      console.log(error.message);
    }
  };

  //reset output
  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  const aiInfo = {
    output,
    resetOutput,
    processRequest,
    isLoading,
    setIsLoading,
    setOutput
  };

  return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
};

export default AiProvider;

































// import React, { createContext, useState } from "react";

// export const AiContext = createContext();

// const AiProvider = ({ children }) => {
//   // States
//   const [output, setOutput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // Functions
//   const processRequest = async (input) => {
//     setIsLoading(true);
//     try {
//       const requestOptions = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${process.env.REACT_APP_HuggingFace_API_KEY}`,
//         },
//         body: JSON.stringify({
//           inputs: input,
//           parameters: {
//             top_k: 100, // Adjust the top_k value as needed
//             top_p: 0.9, // Adjust the top_p value as needed
//             temperature: 0.7, // Adjust the temperature value as needed
//             repetition_penalty: 1.0, // Adjust the repetition_penalty value as needed
//             max_new_tokens: 150, // Adjust the max_new_tokens value as needed
//             return_full_text: true, // Adjust return_full_text as needed
//             num_return_sequences: 1, // Adjust num_return_sequences as needed
//             do_sample: true, // Adjust do_sample as needed
//           },
//         }),
//       };

//       fetch("https://api-inference.huggingface.co/models/gpt2", requestOptions)
//         .then((response) => response.json())
//         .then((data) => {
//           const responseText = data[0].generated_text; // Adjust the response property according to the actual API response
//           console.log(responseText);
//           setOutput(responseText); // Set the response as the output
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Reset output
//   const resetOutput = () => {
//     setOutput("");
//   };





//   const aiInfo = {
//     output,
//     resetOutput,
//     setOutput,
//     processRequest,
//     isLoading,
//     setIsLoading,
//   };

//   return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
// };

// export default AiProvider;
