import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdOutlineVpnKey } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";

const REMEMBER_EMAIL_KEY = "admin_login_remember_email";

export default function AdminLogin() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem(REMEMBER_EMAIL_KEY);
    if (saved) {
      setEmail(saved);
      setRememberDevice(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e?.preventDefault?.();
    setError("");
    setSuccess("");
    setLoading(true);
    const { error: signError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (signError) {
      setError("Credenciales incorrectas");
      return;
    }
    if (rememberDevice) {
      localStorage.setItem(REMEMBER_EMAIL_KEY, email);
    } else {
      localStorage.removeItem(REMEMBER_EMAIL_KEY);
    }
    navigate("/admin/dashboard");
  };

  const handleForgotPassword = async () => {
    setError("");
    setSuccess("");
    if (!email.trim()) {
      setError("Ingresa tu correo para enviar el enlace de recuperación.");
      return;
    }
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email.trim(),
      { redirectTo: `${window.location.origin}/admin/login` }
    );
    if (resetError) {
      setError(resetError.message);
      return;
    }
    setSuccess("Revisa tu bandeja de entrada para restablecer la contraseña.");
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-display">
      <div className="bg-white w-full max-w-md rounded-2xl border border-gray-200/80 shadow-lg shadow-gray-200/50 p-8 space-y-6">
        <div>
          <h1 className="text-xl font-bold text-center text-gray-900">
            Panel Admin
          </h1>
          <p className="text-sm text-gray-500 text-center mt-1">
            Accede con tu cuenta autorizada
          </p>
        </div>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
        {success && (
          <p className="text-emerald-700 text-sm bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
            {success}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="admin-email"
              className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2"
            >
              <MdEmail className="text-gray-500 shrink-0" aria-hidden />
              Correo electrónico
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="email"
              placeholder="ej. admin@tuacademia.edu"
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-gray-900 placeholder:text-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <label
                htmlFor="admin-password"
                className="flex items-center gap-2 text-sm font-bold text-gray-800"
              >
                <MdOutlineVpnKey className="text-gray-500 shrink-0" aria-hidden />
                Contraseña
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <div className="relative">
              <input
                id="admin-password"
                type={showPass ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-lg px-3 py-3 pr-11 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-md cursor-pointer"
                aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPass ? (
                  <HiEyeOff className="w-5 h-5" />
                ) : (
                  <HiEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300 text-blue-700 focus:ring-blue-600"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
            />
            Recordar este dispositivo
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {loading ? "Entrando…" : "Entrar"}
            {!loading && <HiArrowRight className="w-5 h-5" aria-hidden />}
          </button>
        </form>




      </div>
    </div>
  );
}
