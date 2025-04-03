import { Conversation } from './components/conversation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 bg-gray-50">
      {/* Contenedor principal tipo "card" */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">

{/* Logo centrado */}
<img
          src="/logo_iapps.png"
          alt="Logo IApps"
          className="mx-auto mb-4"
          width="80"   // Ajusta el ancho a tu preferencia
          height="80"  // Ajusta la altura si quieres
        />

        <h1 className="text-3xl font-bold mb-4">
          Recu AI Voice Assistant
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        DEMO IApps
        </p>
        
        {/* Aquí va el componente con los botones y el estado */}
        <Conversation />
      </div>
    </main>
  );
}

