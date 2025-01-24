'use client';

import { useConversation } from '@11labs/react';
import { useCallback } from 'react';

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message) => console.log('Message:', message),
    onError: (error) => console.error('Error:', error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Solicitar permiso de micrófono
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Iniciar la conversación directamente con tu agentId
      await conversation.startSession({
        agentId: 'NHlRIQXx7liaAGdopYty',
      });
      

    } catch (error) {
      console.error('Error al iniciar conversación:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  // 5. Renderizar botones y mostrar estado
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button
          onClick={startConversation}
          disabled={conversation.status === 'connected'}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Iniciar Conversación
        </button>
        <button
          onClick={stopConversation}
          disabled={conversation.status !== 'connected'}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
        >
          Terminar Conversación
        </button>
      </div>

      <div className="flex flex-col items-center">
        <p>Estado: {conversation.status}</p>
        <p>El agente está {conversation.isSpeaking ? 'hablando' : 'escuchando'}</p>
      </div>
    </div>
  );
}

