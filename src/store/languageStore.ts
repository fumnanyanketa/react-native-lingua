import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LanguageState {
  selectedLanguageId: string | null;
  _hasHydrated: boolean;
  setSelectedLanguage: (id: string) => void;
  clearSelectedLanguage: () => void;
  setHasHydrated: (val: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      _hasHydrated: false,
      setSelectedLanguage: (id) => set({ selectedLanguageId: id }),
      clearSelectedLanguage: () => set({ selectedLanguageId: null }),
      setHasHydrated: (val) => set({ _hasHydrated: val }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ selectedLanguageId: state.selectedLanguageId }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
