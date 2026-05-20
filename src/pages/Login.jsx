import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  return (
    <div className="h-screen w-full bg-[#0b141a] flex items-center justify-center p-6">

      <div className="w-full max-w-[420px] bg-[#111b21] rounded-3xl p-8 shadow-2xl border border-[#222d34]">

        <div className="flex flex-col items-center">

          <div className="w-20 h-20 rounded-3xl bg-[#8b5cf6] flex items-center justify-center text-4xl shadow-lg">
            💬
          </div>

          <h1 className="text-white text-4xl font-bold mt-6">
            NexUp
          </h1>

          <p className="text-gray-400 mt-2 text-center">
            Modern messaging experience
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="+91 9876543210"
            className="w-full bg-[#202c33] text-white p-4 rounded-2xl outline-none placeholder:text-gray-500"
          />

          <button
  className="w-full bg-[#8b5cf6] hover:opacity-90 transition text-white p-4 rounded-2xl font-semibold text-lg"
>

  Send OTP

</button>

        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Secure login powered by NexUp
        </div>

      </div>

    </div>
  )
}

export default Login