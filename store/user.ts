import { create } from "zustand";

interface NewComponent {
  name?: "Input user id 3 RGB mamalon" | string;
  author: string | undefined;
  source: string;
  type: string | undefined;
  rate: number | undefined;
}

interface UserState {
  user: string;
  token: string | null;
  newComponent: NewComponent;
  filteredComponents:[],
  components: NewComponent[]; // Corrected array type
  setInitialData: (user: string | null, token: string | null) => void;
  selectNewComponentType: (type: string) => void;
  setComponentSource: (source: string) => void;
  logOut: () => void;
  setComponents: (components: NewComponent[]) => void;
  filterComponents: any;
}

const UserStore = create<UserState>((set, get) => ({
  filteredComponents: [],
  user:"",
  token: null,
  components: [], // Corrected array initialization
  newComponent: {
    name: "Input user id 3 RGB mamalon",
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
  setComponentSource: (source: string) => {
    set((state) => ({
      newComponent: {
        ...state.newComponent,
        source: source,
      },
    }));
  },
  logOut: () => {
    set({ user: null, token: null });
  },
  setComponents: (components: NewComponent[]) => {
    set({ components, filteredComponents: components });
  },
  filterComponents: (searchTerm: string) => {
    const filtered = UserStore.getState().components.filter((component) => {
      // Include conditions for filtering based on your criteria.
      // For example, you can filter based on the component's name, author, or type.
      if (!searchTerm) return UserStore.getState().components
      return (
        component.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Set the components data in the UserStore
    UserStore.getState().setComponents(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchAndInitializeComponents function to fetch and set components data
fetchAndInitializeComponents();
export default UserStore;
