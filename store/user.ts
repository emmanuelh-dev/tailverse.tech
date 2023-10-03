import { create } from "zustand";
import { NewComponent, Components } from "@/types";

interface UserState {
  user: string;
  token: string | null;
  newComponent: NewComponent;
  filteredComponents: Components[];
  components: Components[];
  setInitialData: (user: string, token: string) => void;
  selectNewComponentType: (type: string) => void;
  logOut: () => void;
  setComponents: (components: Components[]) => void;
  filterComponents: (searchTerm: string) => void;

  updateSource: (source: string) => void;
  updateAuthor: (author: string) => void;
  updateType: (type: string) => void;
  updateRate: (rate: number) => void;
  updateName: (name: string) => void;
}

const UserStore = create<UserState>((set, get) => ({
  filteredComponents: [],
  user: "",
  token: null,
  components: [], // Corrected array initialization
  newComponent: {
    name: "",
    author: "",
    source: "<div>Hola mundo</div>",
    type: "",
    rate: 0,
  },
  setInitialData: (user, token) => {
    set({ user, token });
  },
  selectNewComponentType: (type: string) => {
    set((state) => ({
      newComponent: {
        ...state.newComponent,
        type: type,
      },
    }));
  },
  updateSource: (source: string) => {
    set((state) => ({
      newComponent: {
        ...state.newComponent,
        source: source,
      },
    }));
  },
  updateAuthor: (author) =>
    set((state) => ({ newComponent: { ...state.newComponent, author } })),
  updateType: (type) => {

    set((state) => ({
      newComponent: { ...state.newComponent, type },
    }));
  },

  updateRate: (rate) =>
    set((state) => ({ newComponent: { ...state.newComponent, rate } })),
  updateName: (name) => {
    console.log(name);
    set((state) => ({ newComponent: { ...state.newComponent, name } }));
  },
  logOut: () => {
    set({ user: "", token: "" });
  },
  setComponents: (components: Components[]) => {
    set({ components, filteredComponents: components });
  },
  filterComponents: (searchTerm: string) => {
    const filtered = UserStore.getState().components.filter((component) => {
      // Include conditions for filtering based on your criteria.
      // For example, you can filter based on the component's name, author, or type.
      if (!searchTerm) return UserStore.getState().components;
      return (
        component.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.source?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    // Set the filtered components in the state
    set({ filteredComponents: filtered });
  },
}));
async function fetchAndInitializeComponents() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Set the components data in the UserStore
    UserStore.getState().setComponents(data);
  } catch (error) {}
}

// Call the fetchAndInitializeComponents function to fetch and set components data
fetchAndInitializeComponents();
export default UserStore;
