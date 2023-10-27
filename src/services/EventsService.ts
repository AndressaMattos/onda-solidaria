import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, query, where, documentId, updateDoc} from "firebase/firestore";
import { auth } from "../config/firebaseConfig";
import { event } from "firebase-functions/v1/analytics";
import { FormValues } from "../@types/forms";

class EventsService {
  private db = getFirestore(auth.app);
  private eventsCollectionRef = collection(this.db, "events");

  async createEvent(eventData: FormValues) {
    try {
      await addDoc(this.eventsCollectionRef, eventData);
      return true;
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
      return false;
    }
  }

  async updateEvent(eventData: FormValues, id: string){
    try {
      await updateDoc(doc(this.db, "events", id), eventData);
      return true;
    } catch (e) {
      return false;
    }
  }

  async listEventsByUser(userId: string){
    try {
    
      if( !userId ) return;

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
  

  async deleteEventById(id: string) {
    try {
      if(!id) return;
      const q = query(this.eventsCollectionRef, where(documentId(), "==", id));
      if (q) {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
      }
    } catch (error) {
      
    }
  }
}

export default EventsService;
