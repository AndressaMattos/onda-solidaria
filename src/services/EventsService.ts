import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, query, where, documentId, updateDoc} from "firebase/firestore";
import { auth } from "../config/firebaseConfig";
import { event } from "firebase-functions/v1/analytics";
import { FormValues } from "../@types";

class EventsService {
  private db = getFirestore(auth.app);
  private eventsCollectionRef = collection(this.db, "events");

  async createEvent(eventData: FormValues) {
    try {
      console.log("Dados do evento a serem salvos:", eventData);
  
      const docRef = await addDoc(this.eventsCollectionRef, eventData);
      console.log("Dados salvos com sucesso com ID: ", docRef.id);
      return true;
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
      return false;
    }
  }

  async updateEvent(eventData: FormValues, id: string){
    try {
      console.log("Dados do evento a serem salvos:", eventData);
  
      await updateDoc(doc(this.db, "events", id), eventData);
      console.log("Dados salvos com sucesso com ID: ", id);
      return true;
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
      return false;
    }
  }

  async listEventsByUser(userId: string){
    try {
      
      if(!userId) return;

      const q = query(this.eventsCollectionRef, where("userId", "==", userId));
      
      const querySnapshot = await getDocs(q);
      
      const events: any[] = [];
      querySnapshot.forEach((doc) => {
        events.push({ ...doc.data(), id: doc.id });
      });
      return events;
    } catch (e) {
      console.error("Erro ao listar documentos: ", e);
      return [];
    }
  }

  async listEventById(id: string){
    try {
      
      if(!id) return;
      const q = query(this.eventsCollectionRef, where(documentId(), "==", id));
      
      const querySnapshot = await getDocs(q);
      
      const event: any[] = [];
      querySnapshot.forEach((doc) => {
        event.push({ ...doc.data(), id: doc.id });
      });
    
      return event;
    } catch (e) {
      console.error("Erro ao listar documentos: ", e);
      return [];
    }
  }

  async listEvents() {
    try {
      const q = query(this.eventsCollectionRef);
      const querySnapshot = await getDocs(q);
      const events: any[] = [];
      querySnapshot.forEach((doc) => {
        events.push({ ...doc.data(), id: doc.id });
      });
      return events;
    } catch (e) {
      console.error("Erro ao listar documentos: ", e);
      return [];
    }
  }
  

  async deleteUser(id: string) {
    try {
      const userDoc = doc(this.db, "events", id);
      await deleteDoc(userDoc);
      console.log("Documento deletado com sucesso");
      return true;
    } catch (e) {
      console.error("Erro ao deletar documento: ", e);
      return false;
    }
  }
}

export default EventsService;
