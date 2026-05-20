import { useState } from "react"

function Chat() {

  const [message, setMessage] = useState("")

  const [messages, setMessages] = useState([
    {
      text: "Hello 👋",
      sender: "other"
    },
    {
      text: "Hi bro 🚀",
      sender: "me"
    },
    {
      text: "NexUp looks awesome 🔥",
      sender: "other"
    }
  ])

  const sendMessage = () => {

    if (message.trim() === "") return

    setMessages([
      ...messages,
      {
        text: message,
        sender: "me"
      }
    ])

    setMessage("")
  }

  return (
    <div className="h-screen flex bg-[#0b141a] overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[350px] bg-[#111b21] border-r border-[#222d34] flex flex-col">

        {/* TOP BAR */}
        <div className="h-[70px] px-5 flex items-center justify-between border-b border-[#222d34]">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-[#8b5cf6] flex items-center justify-center text-white font-bold text-xl">
              N
            </div>

            <h1 className="text-2xl font-bold text-[#8b5cf6]">
              NexUp
            </h1>

          </div>

          <div className="flex gap-5 text-gray-400 text-xl">
            <span>💬</span>
            <span>⚙️</span>
          </div>

        </div>

        {/* SEARCH */}
        <div className="p-4 border-b border-[#222d34]">

          <input
            type="text"
            placeholder="Search chats"
            className="w-full bg-[#202c33] text-white p-3 rounded-full outline-none placeholder:text-gray-400"
          />

        </div>

        {/* CHAT LIST */}
        <div className="flex-1 overflow-y-auto">

          {/* USER */}
          <div className="flex items-center gap-3 p-4 hover:bg-[#202c33] cursor-pointer border-b border-[#222d34] transition">

            <img
              src="https://i.pravatar.cc/150?img=12"
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">

              <div className="flex justify-between">

                <h2 className="font-semibold text-white">
                  Rahul
                </h2>

                <span className="text-xs text-gray-400">
                  2:45 PM
                </span>

              </div>

              <p className="text-sm text-gray-400 truncate">
                Hey bro 👋
              </p>

            </div>

          </div>

          {/* USER */}
          <div className="flex items-center gap-3 p-4 hover:bg-[#202c33] cursor-pointer border-b border-[#222d34] transition">

            <img
              src="https://i.pravatar.cc/150?img=15"
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">

              <div className="flex justify-between">

                <h2 className="font-semibold text-white">
                  Aman
                </h2>

                <span className="text-xs text-gray-400">
                  1:10 PM
                </span>

              </div>

              <p className="text-sm text-gray-400 truncate">
                Let's build NexUp 🚀
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="h-[70px] bg-[#202c33] border-b border-[#222d34] px-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/150?img=12"
              className="w-11 h-11 rounded-full"
            />

            <div>

              <h2 className="font-semibold text-white">
                Rahul
              </h2>

              <p className="text-sm text-green-400">
                Online
              </p>

            </div>

          </div>

          <div className="flex gap-5 text-gray-400 text-xl">

            <span>📞</span>
            <span>📹</span>
            <span>⋮</span>

          </div>

        </div>

        {/* MESSAGE AREA */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#0b141a] space-y-4">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "me"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`px-4 py-3 rounded-2xl shadow-sm max-w-[320px] text-white ${
                  msg.sender === "me"
                    ? "bg-[#8b5cf6]"
                    : "bg-[#202c33]"
                }`}
              >

                {msg.text}

              </div>

            </div>

          ))}

        </div>

        {/* INPUT AREA */}
        <div className="bg-[#202c33] p-4 border-t border-[#222d34] flex items-center gap-3">

          <button className="text-2xl text-gray-400">
            😊
          </button>

          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ color: "black" }}
            className="flex-1 bg-white text-black caret-black p-4 rounded-full outline-none placeholder:text-gray-500"
          />

          <button
            onClick={sendMessage}
            className="bg-[#8b5cf6] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >

            Send

          </button>

        </div>

      </div>

    </div>
  )
}

export default Chat