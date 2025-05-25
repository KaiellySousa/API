import { db } from '@/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// GET - Lista de mensagens do Firestore
export async function GET() {
    try {
        const querySnapshot = await getDocs(collection(db, 'contatos'));
        const contatos = [];

        querySnapshot.forEach((doc) => {
            contatos.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return Response.json(contatos);
    } catch (error) {
        return Response.json({ 
            status: 'erro', 
            mensagem: error.message 
        }, { status: 500 });
    }
}

// POST - Enviar mensagem para o Firestore
export async function POST(request) {
    const data = await request.json();
    const { nome, email, mensagem } = data;

    if (!nome || !email || !mensagem) {
        return Response.json({ 
            status: 'erro', 
            mensagem: 'Todos os campos são obrigatórios: nome, email e mensagem.' 
        }, { status: 400 });
    }

    try {
        const docRef = await addDoc(collection(db, 'contatos'), {
            nome,
            email,
            mensagem,
            data: new Date().toISOString(),
        });

        return Response.json({
            status: 'sucesso',
            mensagem: 'Mensagem enviada com sucesso! 🐾',
            id: docRef.id,
        });
    } catch (error) {
        return Response.json({ 
            status: 'erro', 
            mensagem: error.message 
        }, { status: 500 });
    }
}
