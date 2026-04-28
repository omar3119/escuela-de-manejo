import { useState } from 'react'
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Portal() {
  const [email, setEmail] = useState('')
  const [cedula, setCedula] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleAccess = async () => {
    setError('')

    const { data, error } = await supabase
      .from('clients')
      .select('*')

    if (error) {
      setError('No pudimos validar tus datos. Intenta nuevamente.')
      return
    }

    const result = data?.filter(client =>
      client.email?.toLowerCase().trim() === email.toLowerCase().trim() &&
      client.cedula?.toString().trim() === cedula.trim()
    )

    if (!result || result.length === 0) {
      setError('No encontramos tu información, verifica tu correo y cédula')
    } else {
      navigate('/portal/mis-clases', { state: { client: result[0] } })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-300 bg-white p-7 shadow-sm">
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
          className="mb-3 w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-slate-700 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
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
          className="mb-5 w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-slate-700 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
          value={cedula}
          onChange={e => setCedula(e.target.value)}
        />
        <button
          onClick={handleAccess}
          className="w-full cursor-pointer rounded-xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Ver mis clases
        </button>
      </div>
    </div>
  )
}