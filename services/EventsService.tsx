import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, query, where} from "firebase/firestore";
import { auth } from "../firebaseConfig";

class EventsService {
  private db = getFirestore(auth.app);
  private eventsCollectionRef = collection(this.db, "events");

  async createEvent(
    nameOng: string,
    city: string,
    state: string,
    address: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    try {
      const eventData = {
        nameOng,
        city,
        state,
        address,
        description,
        startDate,
        endDate,
      };
  
      console.log("Dados do evento a serem salvos:", eventData);
  
      const docRef = await addDoc(this.eventsCollectionRef, eventData);
      console.log("Dados salvos com sucesso com ID: ", docRef.id);
      return true;
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
      return false;
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
