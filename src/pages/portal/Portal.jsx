import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

export default function Portal() {
  const [email, setEmail] = useState('')
  const [cedula, setCedula] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    const savedClient = JSON.parse(sessionStorage.getItem('portalClient') || 'null')
    if (savedClient) {
      navigate('/portal/mis-clases', { state: { client: savedClient } })
    }
  }, []);
  
  const handleAccess = async () => {
    setError('')

    // CAMBIADO: filtra en el servidor, no trae todos los clientes al frontend
    const { data, error: supabaseError } = await supabase
      .from('clients')
      .select('*')
      .eq('email', email.toLowerCase().trim())
      .eq('cedula', cedula.trim())
      .single()

    if (supabaseError || !data) {
      setError('No encontramos tu información, verifica tu correo y cédula')
      return
    }

    // AGREGADO: guarda el cliente en sessionStorage para proteger la ruta al recargar
    sessionStorage.removeItem('portalClient')
    sessionStorage.setItem('portalClient', JSON.stringify(data))
    navigate('/portal/mis-clases', { state: { client: data } })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-300 bg-white p-7 shadow-sm">
        <div className="flex items-center gap-2 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm transition text-blue-600 hover:text-blue-700"
          >
            <FaArrowLeft />
            Regresar
          </Link>
        </div>
        <h1 className="mb-2 text-center text-2xl font-bold text-slate-800">Portal del Alumno</h1>
        <p className="mb-6 text-center text-sm text-gray-500">Ingresa tu información para ver tus clases</p>

        {error && <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

        <label htmlFor="portal-email" className="mb-2 block text-sm font-medium text-slate-700">
          Correo electrónico
        </label>
        <input
          id="portal-email"
          type="email"
          placeholder="smith@gmail.com"
          className="mb-3 w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-slate-700 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="portal-cedula" className="mb-2 block text-sm font-medium text-slate-700">
          Cédula
        </label>
        <input
          id="portal-cedula"
          type="text"
          placeholder="8-123-456"
          className="mb-5 w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-slate-700 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
          value={cedula}
          onChange={e => setCedula(e.target.value)}
        />
        <button
          onClick={handleAccess}
          className="w-full cursor-pointer rounded-md bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Ver mis clases
        </button>
      </div>
    </div>
  )
}