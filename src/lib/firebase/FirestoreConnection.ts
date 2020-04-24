import firebase from './firebase';

type FirestoreConnections = firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

class FirestoreConnection {
  private connections: FirestoreConnections;

  constructor() {
    this.connections = firebase.firestore().collection('connections');
  }

  private doc = (id: string) => this.connections.doc(id);
  private add = (data: firebase.firestore.DocumentData) => this.connections.add(data);

  getOffer = async (id: string): Promise<string | void> => {
    const response = await this.doc(id).get();
    const data = response.data();
    if (data) {
      if (data.answer) throw new Error('Was already connected');
      return data.offer;
    }
  };

  sendOffer = (offer: string) => this.add({ offer }).then(({ id }) => id);

  getAnswer = (id: string) =>
    new Promise<string>((resolve) => {
      const removeListener = this.doc(id).onSnapshot((response) => {
        const data = response.data();
        if (!data || !data.answer) return;

        resolve(data.answer);
        removeListener();
      });
    });

  sendAnswer = (id: string, answer: string) => this.doc(id).set({ answer }, { merge: true });
}

export default FirestoreConnection;
