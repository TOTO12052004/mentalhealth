import { useEffect, useRef, useState } from "react";

import { io } from "socket.io-client";
import jwtDecoded from "../utils/jwtDecoded";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router";
import findAllChats from "../api/findAllChats";
import SenderCard from "../components/card/senderCard";
import ReceiverCard from "../components/card/receiverCard";
import Cookie from "js-cookie";

const socket = io("http://localhost:3001", {
  port: 3001,
  path: "/socket-io",
});

const Chats = () => {
  const router = useNavigate();
  const chatRef = useRef(null);
  const [profile, setProfile] = useState({
    name: "",
  });
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    receiver_id: "",
    sender_id: "",
    message: "",
  });
  const params = useParams();

  const inputRef = useRef(null);

  const fetchAllMessage = async (params) => {
    setLoading(true);
    try {
      const response = await findAllChats(params);
      setChats(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    if (form.message) {
      socket.emit("consultation-chatting", form);
      setForm((prev) => {
        return {
          ...prev,
          message: "",
        };
      });
    }
  };

  useEffect(() => {
    socket.on("consultation-chatting", (data) => {
      setChats((prev) => [...prev, data]);
    });

    return () => {
      socket.off("consultation-chatting");
    };
  }, []);

  window.onresize = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const scrollToBottom = () => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  };

  useEffect(() => {
    const cookie = Cookie.get("token");

    if (!cookie) {
      router("/login");
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    const decoded = jwtDecoded(Cookies.get("token"));
    const senderId = parseInt(decoded.sub);
    const receiverId = parseInt(params.id);

    setProfile({
      name: decoded.role === "apoteker" ? decoded.username : decoded.fullname,
    });
    fetchAllMessage({
      sender_id: senderId,
      receiver_id: receiverId,
    });
    setForm((prev) => {
      return {
        ...prev,
        receiver_id: receiverId,
        sender_id: senderId,
      };
    });
  }, []);
  return (
    <div className="relative xl:px-24 h-screen px-6 overflow-hidden">
      <div className="flex gap-8 h-full mt-28">
        {/* <aside className="flex flex-col gap-3">
          <input
            type="text"
            className="w-[18rem] h-[2.5rem] border-[1px] border-slate-300 rounded-lg outline-none px-3"
            placeholder="cari kontak..."
          />
          <div className="mt-4 flex flex-col gap-5">
            <ChatCard />
            <ChatCard />
          </div>
        </aside> */}
        <main className="relative w-full">
          <div className="w-full xl:w-[40rem] mx-auto p-0 md:p-6 lg:p-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="bg-[#06beb6] p-4 rounded-t-lg text-white font-bold">
                {profile.name}
              </div>

              <div
                id="chat-area"
                className="p-4 h-96 overflow-y-auto max-h-[70vh]"
                ref={chatRef}
              >
                {loading ? (
                  <div className="text-center">Loading...</div>
                ) : (
                  chats.map((chat, index) => {
                    if (chat.sender_id === form.sender_id) {
                      return <SenderCard key={index} data={chat} />;
                    } else {
                      return <ReceiverCard key={index} data={chat} />;
                    }
                  })
                )}
              </div>

              <div
                ref={inputRef}
                className="p-4 border-t border-gray-200 bg-white rounded-b-lg"
              >
                <div className="flex justify-center gap-3 items-center">
                  <input
                    onChange={(e) =>
                      setForm((prev) => {
                        return {
                          ...prev,
                          message: e.target.value,
                        };
                      })
                    }
                    value={form.message}
                    type="text"
                    placeholder="Ketik pesan..."
                    className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#06beb6] mb-2 md:mb-0 md:mr-2"
                  />
                  <button
                    onClick={submitMessage}
                    className="bg-[#06beb6] text-white rounded-lg p-2 hover:bg-[#05a8a1] w-full md:w-auto"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Chats;
