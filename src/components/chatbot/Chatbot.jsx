// import { useEffect, useState, useRef } from "react";
// import ChatbotIcon from "./components/ChatbotIcon";
// import ChatForm from "./components/ChatForm";
// import ChatMessage from "./components/ChatMessage"; 

// const App = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const chatBodyRef = useRef();
//   const dummyRef = useRef(); // Dummy ref for auto-scroll

//   const generateBotResponse = async (history) => {
//     const updateHistory = (text) => {
//       setChatHistory(prev => [
//         ...prev.filter(msg => msg.text !== "thinking..."),
//         { role: "model", text }
//       ]);
//     };

//     history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ contents: history })
//     };

//     try {
//       const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

//       const apiResponseText = data.candidates[0].content.parts[0].text
//         .replace(/\*\*(.*?)\*\*/g, "$1")
//         .trim();

//       updateHistory(apiResponseText);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ✅ Auto-scroll to the latest message
//   useEffect(() => {
//     if (dummyRef.current) {
//       dummyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatHistory]);

//   return (
//     <div className="container">
//       <div className="chatbot-popup">
//         <div className="chat-header">
//           <div className="header-info">
//             <ChatbotIcon />
//             <div className="logo-text">Chatbot</div>
//           </div>
//           <button className="material-symbols-rounded">keyboard_arrow_down</button>
//         </div>

//         <div ref={chatBodyRef} className="chat-body">
//           <div className="message bot-message">
//             <ChatbotIcon />
//             <p className="message-text">
//               Hey there <br /> How can I help you?
//             </p>
//           </div>

//           {chatHistory.map((chat, index) => (
//             <ChatMessage key={index} chat={chat} />
//           ))}

//           {/* ✅ Dummy div for auto-scrolling */}
//           <div ref={dummyRef}></div>
//         </div>

//         <div className="chat-footer">
//           <ChatForm
//             chatHistory={chatHistory}
//             setChatHistory={setChatHistory}
//             generateBotResponse={generateBotResponse}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState, useRef } from "react";
// import ChatForm from "./ChatForm";
// import ChatMessage from "./ChatMessage";
// import ChatbotIcon from "./ChatbotIcon";

// const App = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatOpen, setIsChatOpen] = useState(false); // ✅ new state for chatbot open/close
//   const chatBodyRef = useRef();
//   const dummyRef = useRef();

//   const generateBotResponse = async (history) => {
//     const updateHistory = (text) => {
//       setChatHistory((prev) => [
//         ...prev.filter((msg) => msg.text !== "thinking..."),
//         { role: "model", text },
//       ]);
//     };

//     history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ contents: history }),
//     };

//     try {
//       const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

//       const apiResponseText = data.candidates[0].content.parts[0].text
//         .replace(/\*\*(.*?)\*\*/g, "$1")
//         .trim();

//       updateHistory(apiResponseText);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ✅ Auto-scroll to the latest message
//   useEffect(() => {
//     if (dummyRef.current) {
//       dummyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatHistory]);

//   const toggleChat = () => {
//     setIsChatOpen((prev) => !prev);
//   };

//   return (
//     <div className="container">
//       {!isChatOpen && (
//         <div className="chatbot-icon-only" onClick={toggleChat} style={{ position: "fixed", bottom: "20px", right: "20px", cursor: "pointer" }}>
//           <ChatbotIcon />
//         </div>
//       )}

//       {isChatOpen && (
//         <div className="chatbot-popup" style={{ position: "fixed", bottom: "80px", right: "20px", width: "300px", backgroundColor: "white", boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
//           <div className="chat-header" style={{ padding: "10px", backgroundColor: "#6200ea", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <div className="header-info" style={{ display: "flex", alignItems: "center" }}>
//               <ChatbotIcon />
//               <div className="logo-text" style={{ marginLeft: "10px" }}>Chatbot</div>
//             </div>
//             <button onClick={toggleChat} className="material-symbols-rounded" style={{ background: "none", border: "none", color: "white", fontSize: "24px", cursor: "pointer" }}>
//               close
//             </button>
//           </div>

//           <div ref={chatBodyRef} className="chat-body" style={{ maxHeight: "400px", overflowY: "auto", padding: "10px" }}>
//             <div className="message bot-message" style={{ display: "flex", marginBottom: "10px" }}>
//               <ChatbotIcon />
//               <p className="message-text" style={{ marginLeft: "10px" }}>
//                 Hey there <br /> How can I help you?
//               </p>
//             </div>

//             {chatHistory.map((chat, index) => (
//               <ChatMessage key={index} chat={chat} />
//             ))}

//             {/* Dummy div for auto-scrolling */}
//             <div ref={dummyRef}></div>
//           </div>

//           <div className="chat-footer" style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
//             <ChatForm
//               chatHistory={chatHistory}
//               setChatHistory={setChatHistory}
//               generateBotResponse={generateBotResponse}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import { useEffect, useState, useRef } from "react";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import ChatbotIcon from "./ChatbotIcon";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State for chatbot open/close
  const chatBodyRef = useRef();
  const dummyRef = useRef(); // Used for auto-scrolling

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "thinking..."), // Remove "thinking..." message
        { role: "model", text }, // Add bot's response
      ]);
    };

    // Format chat history for the API request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // **IMPORTANT CHANGE HERE:** Use process.env.REACT_APP_API_URL for CRA
      const response = await fetch(process.env.REACT_APP_API_URL, requestOptions);
      const data = await response.json();

      // Handle API errors
      if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

      // Process and clean the API response text
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown (**)
        .trim();

      updateHistory(apiResponseText); // Update chat history with bot's response
    } catch (error) {
      console.error("Error generating bot response:", error);
      // Optionally, add an error message to chat history
      updateHistory("Oops! Something went wrong. Please try again.");
    }
  };

  // Auto-scroll to the latest message whenever chatHistory updates
  useEffect(() => {
    if (dummyRef.current) {
      dummyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  // Toggles the chat window open/close state
  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {/* Chatbot icon when the chat is closed */}
      {!isChatOpen && (
        <div
          className="chatbot-icon-only"
          onClick={toggleChat}
          style={{
            position: "fixed", // Positions relative to the viewport
            bottom: "20px",    // 20px from the bottom
            right: "20px",     // 20px from the right
            cursor: "pointer",
            zIndex: 1000,      // Ensure it's above other content
          }}
        >
          <ChatbotIcon />
        </div>
      )}

      {/* Chatbot popup when the chat is open */}
      {isChatOpen && (
        <div
          className="chatbot-popup"
          style={{
            position: "fixed", // Positions relative to the viewport
            bottom: "80px",    // Slightly higher than the icon
            right: "20px",     // Aligned with the icon on the right
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",       // Use flexbox for layout
            flexDirection: "column", // Stack items vertically
            height: "500px",       // Fixed height for the popup
            zIndex: 1000,          // Ensure it's above other content
          }}
        >
          <div
            className="chat-header"
            style={{
              padding: "10px",
              backgroundColor: "#6200ea",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0, // Prevent header from shrinking
            }}
          >
            <div className="header-info" style={{ display: "flex", alignItems: "center" }}>
              <ChatbotIcon />
              <div className="logo-text" style={{ marginLeft: "10px" }}>
                Chatbot
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="material-symbols-rounded" // Assuming Material Symbols are linked in your HTML
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              close
            </button>
          </div>

          <div
            ref={chatBodyRef}
            className="chat-body"
            style={{
              flexGrow: 1, // Allows chat body to take up remaining space
              overflowY: "auto", // Enables scrolling for messages
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Initial welcome message */}
            <div className="message bot-message" style={{ display: "flex", marginBottom: "10px", alignItems: "flex-start" }}>
              <ChatbotIcon />
              <p className="message-text" style={{ marginLeft: "10px", padding: "8px 12px", backgroundColor: "#e0e0e0", borderRadius: "15px", maxWidth: "80%" }}>
                Hey there <br /> How can I help you?
              </p>
            </div>

            {/* Render chat history messages */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

            {/* Dummy div for auto-scrolling to the bottom */}
            <div ref={dummyRef}></div>
          </div>

          <div
            className="chat-footer"
            style={{
              padding: "10px",
              borderTop: "1px solid #ccc",
              flexShrink: 0, // Prevent footer from shrinking
            }}
          >
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;