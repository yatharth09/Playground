import { create } from "zustand";

import { FolderStructureStoreState } from "../Types/types";

const folderStructureStore = create<FolderStructureStoreState>()((set) => ({
  folderStructure: null,
  setFolderStructure: async (playgroundId) => {
    const response = await fetch(
      `http://localhost:3000/api/tree/${playgroundId}`
    );
    set({ folderStructure: await response.json() });
  },
}));

export default folderStructureStore;
