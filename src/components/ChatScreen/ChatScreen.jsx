import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

// ASSETS
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./ChatScreen.css";

const ChatScreen=()=> {
  const API_KEY = "AIzaSyAtp_lUKFAXhp9O1B_nmg_pvWGAuVxaXZ8";
  const [data, setData] = useState(undefined);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchDataFromGeminiProAPI() {
    try {
      // ONLY TEXT
      if (!inputText) {
        alert("Please enter text!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(inputText);
      const text = result.response.text();
      setLoading(false);
      setData(text);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  async function fetchDataFromGeminiProVisionAPI() {
    try {
      // TEXT AND FILE
      if (!inputText) {
        alert("Please enter text!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const fileInputEl = document.querySelector("input[type=file]");
      const imageParts = await Promise.all(
        [...fileInputEl.files].map(fileToGenerativePart)
      );
      const result = await model.generateContent([inputText, ...imageParts]);
      const text = result.response.text();

      setLoading(false);
      setData(text);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{"color":"black"}}>Vite + React | Google AI Gemini Integration</h1>
      <div className="card">
        <input type="file" style={{"color":"black"}} />
        <input
          type="text"
          style={{ width: 400 , background:"white" , color:"black"}}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {" | "}
        <button disabled={loading} onClick={() => fetchDataFromGeminiProAPI()}>
          {loading ? "Loading..." : "Get PRO"}
        </button>
        <button
          disabled={loading}
          onClick={() => fetchDataFromGeminiProVisionAPI()}
        >
          {loading ? "Loading..." : "Get PRO Vision "}
        </button>
        <div> 
          <p>
          &ensp;
          </p>
        </div>
        <hr style={{height:"5px", background:"black", bottom:"2px"}}/>
        <div style={{"color":"black"}}>Response: {data}</div>
      </div>
    </>
  );
}

export default ChatScreen;